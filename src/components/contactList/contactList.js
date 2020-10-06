import React, { Component } from "react";
import FindContacts from "../findContacts/findContacts";
import ContactListItem from "./contactListItem/contactListItem";


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