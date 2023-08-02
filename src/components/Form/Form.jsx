import React, { Component } from 'react';
import { FormDiv, Input, Button } from './Form.styled';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  nameInputId = shortid.generate();
  tellInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormDiv onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.tellInputId}>
          Number
          <Input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.tellInputId}
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <Button type="submit">Add contact</Button>
      </FormDiv>
    );
  }
}

// export default Form;
