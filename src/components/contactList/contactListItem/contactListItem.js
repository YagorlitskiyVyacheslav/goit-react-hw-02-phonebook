import React from "react";
import List from "../contactList.component"

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

export default ContactListItem;