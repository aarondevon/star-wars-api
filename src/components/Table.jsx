import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function displayData(props) {
  return props.characters.map((characterInfo) => {
    return (
      <tr key={uuidv4()}>
        <td>{characterInfo.name}</td>
        <td>{characterInfo.birth_year}</td>
        <td>{characterInfo.height}</td>
        <td>{characterInfo.mass}</td>
        <td>{characterInfo.homeworld}</td>
        <td>{characterInfo.species}</td>
      </tr>
    );
  });
}

function Table(props) {
  return (
    <div>
      <table id="data-table" className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Home World</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {
          props.characters[0] && displayData(props)
          }
        </tbody>
      </table>

    </div>
  );
}

export default Table;
