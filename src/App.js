import React, { Component } from "react";
import { Route } from "react-router-dom";

import ContactListings from "./components/contact-listings";
import AddContactForm from "./components/add-contact-form";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Grapevine Contacts App</h1>
        <Route exact path="/" component={ContactListings}/>
        <Route path="/addContact" component={AddContactForm} />
      </div>
    );
  }
}
