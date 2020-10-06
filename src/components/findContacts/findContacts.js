import React, { Component } from "react";
import Input from './findContact.component';

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