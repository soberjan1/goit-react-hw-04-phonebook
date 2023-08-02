import PropTypes from 'prop-types';
import { ContactsItemStyle, DeleteBtn } from './Contactsitem.styled';
export const ContactsItem = ({ name, number, id, deleteContact }) => {
  return (
    <ContactsItemStyle key={id}>
      <p>
        {name} : {number}
      </p>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </ContactsItemStyle>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
