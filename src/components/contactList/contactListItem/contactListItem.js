import React from "react";
import List from "../contactList.component"
import PropTypes from "prop-types";

function ContactListItem({contacts, onRemoveContact}) {

    return (
      <>
        <List>
          {contacts.map((contact) => {
            return (
              <List.Item key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button
                  type="button"
                  onClick={() => onRemoveContact(contact.id)}
                >
                  Delete
                </button>
              </List.Item>
            );
          })}
        </List>
      </>
    );
}

ContactListItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactListItem;