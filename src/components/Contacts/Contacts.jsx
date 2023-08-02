import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsList } from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, id, number }) => (
        <ContactsItem
          id={id}
          name={name}
          number={number}
          key={id}
          deleteContact={deleteContact}
        />
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
