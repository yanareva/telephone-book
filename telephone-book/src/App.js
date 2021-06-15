import { Component } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Emma Stoun", number: "0998765645" },
      { id: "id-2", name: "Davyd Bekcham", number: "0506877766" },
      { id: "id-3", name: "Garry Potter", number: "0998745604" },
    ],
    filter: "",
  };
  handleAddContact = (newContact) =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  nandleCheckUnique = (name) => {
    const { contacts } = this.state;
    const isExistConctact = !!contacts.find((contact) => contact.name === name);

    isExistConctact && alert("Contact is already exist");
    return !isExistConctact;
  };

  handleRemoveContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilterChange = (filter) => this.setState({ filter });

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1> Phone Book</h1>
        <h1>Add Contact</h1>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.nandleCheckUnique}
        />
        <h1>Contacts List</h1>

        <Filter filter={filter} onChange={this.handleFilterChange} />

        <ContactList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </>
    );
  }
}
