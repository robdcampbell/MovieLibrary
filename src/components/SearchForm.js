import React, { useRef } from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const searchTerm = useRef();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>movie library.</h2>
      <div className="form__control">
        <input
          type="text"
          className="form-input"
          ref={searchTerm}
          // value={query}
          onChange={(e) => {
            // setQuery(e.target.value);
          }}
          onSubmit={(e) => {
            return setQuery(searchTerm.current.value);
          }}
        />
        <button
          type="button"
          onClick={(e) => {
            return setQuery(searchTerm.current.value);
          }}
        >
          search
        </button>
      </div>
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
