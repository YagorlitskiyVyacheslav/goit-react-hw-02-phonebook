import React, { Component } from "react";
import Form from './form.component';
import PropTypes from "prop-types";

export default class AddContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  SubmitHandler = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { name, number } = this.state;
    onSubmit(name, number);
    this.setState({
      name: '',
      number: ''
    })
  }
  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.SubmitHandler}>
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

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};