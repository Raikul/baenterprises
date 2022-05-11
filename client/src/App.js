import React, { useState, useEffect } from "react";
import logo from "./imgs/logo.svg";
import "./stylesheets/App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Bienvenido a la API de BA Enterprises. Las rutas de las vistas son:
          <ul>
            <li>/customers</li>
            <li>/customers/:id</li>
            <li>/customers/create</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
/*
return (
    <div className="App">
      <p> {posts} </p>
      <button onClick={fetchPost}> get new joke </button>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch("/customers");
      setData(results.json());
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{!data ? "Loading..." : <Customers list={this.data} />}</ul>
      </header>
    </div>
  );
}

export default App;

 /*
  React.useEffect(() => {
    fetch("/customers")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
*/
