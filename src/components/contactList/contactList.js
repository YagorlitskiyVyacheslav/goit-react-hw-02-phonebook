import React, { Component } from "react";
import FindContacts from "../findContacts/findContacts";
import ContactListItem from "./contactListItem/contactListItem";
import PropTypes from "prop-types";

export default class ContactList extends Component {
  
  render() {
    const { contacts, contactSearch, onRemoveContact } = this.props;
    return (
      <>
        <div>
          <h2>Contacts</h2>
          <FindContacts contactSearch={contactSearch} />
          <ContactListItem
            contacts={contacts}
            onRemoveContact={onRemoveContact}
          />
        </div>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  contactSearch: PropTypes.func.isRequired,
  onRemoveContact: PropTypes.func.isRequired
}