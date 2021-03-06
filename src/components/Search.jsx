import React, { useState } from 'react';

const handleChange = (event, setSearch) => {
  setSearch(event.target.value.trim());
};

const handleSubmit = (event, props, search) => {
  event.preventDefault();
  const url = search.length > 0 ? `https://swapi.dev/api/people/?search=${search}` : 'https://swapi.dev/api/people/';
  props.setURL(props.setswURL, url);
};

function Search(props) {
  const [search, setSearch] = useState('');
  return (
    <div id="search-container">
      <form
        className="search-form"
        onSubmit={(event) => handleSubmit(event, props, search)}
      >
        <input
          className="form-control search"
          type="search"
          placeholder="Name Search"
          aria-label="Search"
          value={search}
          onChange={(event) => handleChange(event, setSearch)}
        />
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="btn btn-dark submit" type="submit" value="Search">Search</button>
      </form>
    </div>
  );
}

export default Search;
