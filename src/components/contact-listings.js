import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";

export default class ContactListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      error: null
    };
  }

  componentDidMount() {
    fetch(`${API_BASE_URL}/contacts`)
      .then(res => res.json())
      .then(
        result => this.setState({ contacts: result.contacts }),
        error => this.setState({ error })
      );
  }

  handleClick(id){
    // TODO: Set id in state and render the appropriate contact 
  }

  render() {
    const { error, contacts } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    let contactsList = [];
    if (contacts.length) {
      contacts.forEach(contact => {
        const contactInfo = (
          <div key={contact.id}>
            <p>Name: {contact.displayName}</p>
            <p>Company: {contact.company}</p>
            <button onClick={() => this.handleClick(contact.id)}>
              Click for more info
            </button>
          </div>
        );
        contactsList.push(contactInfo);
      });
    } else return <p>No contacts found yet. Add one to start.</p>;

    return (
      <>
      <Link to="/addContact">Add a Contact</Link>
      <ul>{contactsList}</ul>
      </>
    )
  }
}
