import React, { Component } from "react";

import AddContactForm from "./components/add-contact-form";
import ContactListings from "./components/contact-listings";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <AddContactForm />
        <ContactListings />
      </div>
    );
  }
}
