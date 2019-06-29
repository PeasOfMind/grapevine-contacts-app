import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";

export default class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      success: null
    };
  }

  onSubmit = values => {
    this.setState({ success: null, error: null });
    fetch(`${API_BASE_URL}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then(resJson => {
        this.setState({ success: "Your contact was added!", error: null });
      })
      .catch(error => {
        console.error(error);
        this.setState({ error: `Error! ${error.message}`, success: null });
      });
  };

  render() {
    const required = value => (value ? undefined : "Required");

    return (
      <>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form>
              <h2>Add a Contact</h2>
              <Field name="displayName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Name:</label>
                    <input {...input} type="text" placeholder="John Doe" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="title">
                {({ input, meta }) => (
                  <div>
                    <label>Title:</label>
                    <input {...input} type="text" placeholder="ABC Executive" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="company">
                {({ input, meta }) => (
                  <div>
                    <label>Company:</label>
                    <input {...input} type="text" placeholder="Example Inc." />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="location">
                {({ input, meta }) => (
                  <div>
                    <label>Location:</label>
                    <input {...input} type="text" placeholder="New York" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <br />
              <button
                onClick={event => {
                  event.preventDefault();
                  handleSubmit();
                }}
                disabled={submitting}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
              <br />
              {this.state.success}
              {this.state.error}
            </form>
          )}
        />
        <Link to="/">Back to Contact Listings</Link>
      </>
    );
  }
}
