import { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSetInfo = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddContact = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleAddContact}>
        <label>
          <p>Name</p>
          <input
            onChange={this.handleSetInfo}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            onChange={this.handleSetInfo}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" text="Add contact" />
      </form>
    );
  }
}

export default ContactForm;
