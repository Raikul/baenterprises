import React, { useState, useEffect } from "react";
import logo from "../imgs/logo.svg";
import "../stylesheets/App.css";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const response = await fetch("/api/customers");
    const data = await response.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const renderedResults = customers.map((customer) => {
    return (
      <li key={customer.id}>
        {customer.id} {customer.first_name}{" "}
        <img alt={customer.id} src={customer.image} />
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
