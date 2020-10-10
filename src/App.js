import React, { Component } from 'react';
import AddContactForm from './components/form/addContactForm';
import shortid from 'shortid'
import ContactList from './components/contactList/contactList';
import Container from './App.components';

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts')

    if(persistedContacts) {
      this.setState({contacts: JSON.parse(persistedContacts)})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
