import React from "react";
import logo from "../imgs/logo.svg";
import "../stylesheets/App.css";
const Create = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form action="/api/customers/create" method="POST">
          <label htmlFor="first_name">First name:</label>
          <input type="text" id="first_name" name="first_name" />
          <br />
          <label htmlFor="last_name">Last name:</label>
          <input type="text" id="last_name" name="last_name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
          <br />
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" />
          <br />
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" />

          <br />

          <button>Submit!</button>
        </form>
      </header>
    </div>
  );
};

export default Create;
