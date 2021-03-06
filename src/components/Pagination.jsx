import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const getUrl = (url, split) => {
  if (url.includes(split)) {
    const index = url.indexOf(split);
    return url.slice(0, index);
  }
  return url;
};

const handleClick = (event, props) => {
  const { id } = event.target;

  let urlStart = '';

  if (props.swURL.includes('search')) {
    urlStart = getUrl(props.swURL, '&');
  } else {
    urlStart = 'https://swapi.dev/api/people/';
  }

  const urlEnd = props.swURL.includes('search') ? `&page=${id}` : `?page=${id}`;
  props.setAPI(props.setswURL, `${urlStart}${urlEnd}`);
};

function getNumberOfButtons(props) {
  return Math.ceil(props.characterCount / 10);
}

function createButtons(props) {
  const buttonArr = [];
  let buttonCount = 1;
  const numberOfButtons = getNumberOfButtons(props);
  while (buttonCount <= numberOfButtons) {
    buttonArr.push(
      <button
        key={uuidv4()}
        id={buttonCount}
        className="btn btn-dark btn-lg pagination"
        onClick={(event) => handleClick(event, props)}
      >
        {buttonCount}
      </button>,
    );
    buttonCount += 1;
  }
  return buttonArr;
}

function Pagination(props) {
  return (
    <div id="pagination-container" className="row">
      {createButtons(props)}
    </div>
  );
}

export default Pagination;
