import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        onClick={props.click}
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
