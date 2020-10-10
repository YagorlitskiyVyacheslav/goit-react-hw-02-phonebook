import React, { Component } from "react";
import Input from './findContact.component';
import PropTypes from "prop-types";

export default class FindContacts extends Component {
    render() {
        const {contactSearch} = this.props;
        return (
            <>
            <div>
                <Input.Label>Find contacts by name</Input.Label>
                <Input onChange={(e) => contactSearch(e.target.value)} placeholder="Enter name"/>
            </div>
            </>
        )
    }
}

FindContacts.propTypes = {
  contactSearch: PropTypes.func.isRequired,
};