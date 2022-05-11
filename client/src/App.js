import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/Customers";

export default function App() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const response = await fetch("/customers");
    const data = await response.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const renderedResults = customers.map((customer) => {
    return (
      <li key={customer.id}>
        {customer.id} {customer.first_name} <img src={customer.image} />
      </li>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{renderedResults}</ul>
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
