import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import Search from './Search';
import Pagination from './Pagination';

const httpToHttps = (url) => {
  return url.replace('http', 'https');
};

const getCharacterInfo = async (swURL) => {
  let response;
  try {
    response = await axios.get(swURL);
  } catch (error) {
    console.log(error);
  }
  return {
    characterCount: response.data.count,
    characterInfo: response.data.results,
  };
};

const getHomeworld = async (homeworldURL) => {
  const homeworld = await axios.get(httpToHttps(homeworldURL));
  return homeworld.data.name;
};

const getSpecies = async (speciesURL) => {
  if (speciesURL.length === 0) {
    return 'Human';
  }
  const species = await axios.get(httpToHttps(speciesURL[0]));
  return species.data.name;
};

const setURL = (setswURL, URL) => {
  setswURL(URL);
};

const getCharacters = async (setCharacters, setCharacterCount, swURL) => {
  const responseData = await getCharacterInfo(swURL);
  const { characterCount, characterInfo } = responseData;

  const characters = await Promise.all(characterInfo.map(async (character) => {
    character.homeworld = await getHomeworld(character.homeworld);
    character.species = await getSpecies(character.species);
    return character;
  }));

  setCharacters(characters);
  setCharacterCount(characterCount);
};

function App() {
  const [characters, setCharacters] = useState({});
  const [characterCount, setCharacterCount] = useState(0);
  const [swURL, setswURL] = useState('https://swapi.dev/api/people/');

  useEffect(() => {
    getCharacters(setCharacters, setCharacterCount, swURL);
  }, [swURL]);

  return (
    <div className="container app">
      <div id="main-page-container">
        <main>
          <div className="row">
            <div className="col-12">
              <h1 id="hero-title">Star Wars Data</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Search setswURL={setswURL} setURL={setURL} />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Table characters={characters} />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Pagination
                characterCount={characterCount}
                swURL={swURL}
                setswURL={setswURL}
                setAPI={setURL}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
