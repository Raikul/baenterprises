import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../imgs/logo.svg";
import "../stylesheets/App.css";

const Customer = () => {
  let params = useParams();
  const [customer, setCustomer] = useState([]);

  const fetchCustomer = async () => {
    const response = await fetch("/api/customers/" + params.customerId);
    const data = await response.json();
    setCustomer(data);
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  const renderedResults = (() => {
    return (
      <section>
        <div>Id: {customer.id}</div>
        <div>
          Full Name: {customer.first_name} {customer.last_name}
        </div>
        <div> Email: {customer.email}</div>
        <div>Gender: {customer.gender}</div>
        <div>
          {" "}
          Image: <img alt={customer.id} src={customer.image} />
        </div>
      </section>
    );
  })();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {renderedResults}
      </header>
    </div>
  );
};

export default Customer;
