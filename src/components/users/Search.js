import React from "react";
import { useState } from "react";
const Search = (props) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      props.alert("Please fill in the form", "light");

      return;
    }

    props.searchUsers(text);
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "inline-grid",
        width: "100%",
        gridTemplateColumns:
          props.users.length > 0 ? "repeat(2,1fr)" : "repeat(1,1fr)",
      }}
    >
      <form
        onSubmit={onSubmit}
        className="form"
        style={{
          margin: "auto",

          display: "inline-grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: "0.5rem",
        }}
      >
        <input
          type="text"
          value={text}
          onChange={onChange}
          name="text"
          placeholder="search for users"
          style={{ width: "25rem", marginLeft: "40px" }}
        />

        <input
          type="submit"
          value="Seach"
          style={{ width: "20rem" }}
          className="btn btn-dark"
        />
      </form>
      {props.users.length > 0 && (
        <button
          onClick={props.clearUsers}
          className="btn btn-dark btn-block"
          value="Clear"
          style={{ height: "2.3rem", width: "20rem", marginTop: "20px" }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
