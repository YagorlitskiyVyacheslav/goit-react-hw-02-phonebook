import React, { Component } from 'react';
import AddContactForm from './components/form/addContactForm';
import shortid from 'shortid'
import ContactList from './components/contactList/contactList';
import Container from './App.components';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  checkContact = (name) => {
    return this.state.contacts.some((contact) => {
      return contact.name === name;
    });
  };
  onRemoveContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  };
  onSubmitHandler = (name, number) => {
    console.log(name)
    this.setState((prevState) => {
      if (this.checkContact(name)) {
        return alert(`${name} is already in contacts.`);
      }
      return {
        contacts: [
          ...prevState.contacts,
          { name: name, number: number, id: shortid.generate() },
        ],
      };
    });
  };
  contactSearch = (filter) => {
    this.setState({ filter });
  };
  filterByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase())}
    );
  };
  render() {
    return (
      
        <Container>
        <h2>Phonebook</h2>
        <AddContactForm
          onSubmit={this.onSubmitHandler}
        />
        <ContactList
          contacts={this.filterByName()}
          contactSearch={this.contactSearch}
          onRemoveContact={this.onRemoveContact}
        />
        </Container>
      
    );
  }
}

export default App;
