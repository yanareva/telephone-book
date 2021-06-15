import { Component } from "react";
import { v4 as uuid } from "uuid";
const INITIAL_STATE = {
  name: "",
  surname: "",
  phone: "",
};
class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, surname, phone } = this.state;
    const { onAdd } = this.props;
    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, surname, phone });

    this.resetForm();
  };
  validateForm = () => {
    const { name, surname, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !surname || !phone) {
      alert("Some filed is empty");
      return false;
    }
    return onCheckUnique(name);
  };
  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, surname, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          type="text"
          name="surname"
          placeholder="Enter surname"
          value={surname}
          onChange={this.handleChangeForm}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button type="submit">Add contact</button>
        <button onClick={() => this.resetForm()}>Cansel</button>
      </form>
    );
  }
}
export default ContactForm;
