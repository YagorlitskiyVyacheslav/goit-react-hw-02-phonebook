import React, { Component } from "react";
import Form from './form.component';

export default class AddContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { onSubmit } = this.props;
    const { name, number } = this.state;
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(name, number);
        }}
      >
        <Form.Label>
          Name
          <input
            type="text"
            placeholder="Enter a contact name"
            name="name"
            onChange={this.onChangeHandler}
            value={name}
          />
        </Form.Label>
        <Form.Label>
          Number
          <input
            type="number"
            placeholder="Enter the number"
            onChange={this.onChangeHandler}
            name="number"
            value={number}
          />
        </Form.Label>
        <Form.Button type="submit">Add contact</Form.Button>
      </Form>
    );
  }
}