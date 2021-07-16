import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./componenets/ContactForm/ContactForm.js";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    this.state.contacts.find((savedContact) => savedContact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;
