import React, { Component } from "react";

export default class AddContactForm extends Component {
  // constructor() {
  //   this.state = {};
  // }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="displayName" type="text" />
        </label>
        <br />
        <label>
          Title:
          <input name="title" type="text" />
        </label>
        <br />
        <label>
          Company:
          <input name="company" type="text" />
        </label>
        <br />
        <label>
          Location:
          <input name="location" type="text" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
