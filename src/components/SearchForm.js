import React, { useRef } from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const searchTerm = useRef();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h1>movie library.</h1>
      <div className="form__control">
        <input
          type="text"
          className="form-input"
          ref={searchTerm}
          placeholder="Search for a movie..."
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
          onSubmit={(e) => {
            return setQuery(searchTerm.current.value);
          }}
        />
        <button
          type="submit"
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
