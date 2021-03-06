import React from 'react';

function Search(props) {
  return (
    <div id="search-container">
      <form
        className="search-form"
        onSubmit={props.search}
      >
        <input
          className="form-control search"
          type="search"
          placeholder="Name Search"
          aria-label="Search"
          value={props.value}
          onChange={props.change}
        />
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="btn btn-dark submit" type="submit" value="Search">Search</button>
      </form>
    </div>
  );
}

export default Search;
