import { useState, useEffect } from 'react';
import { Container } from './App,.styled.jsx';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import Form from './Form/Form';
import shortid from 'shortid';
import { Contacts } from './Contacts/Contacts';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const { name, number } = data;
    const findContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (findContact) {
      alert(`${name} is already in contact.`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      ...data,
    };

    setContacts(contacts => [...contacts, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} changeFilter={changeFilter} />
        <Contacts
          contacts={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </Container>
  );
};

export default App;
