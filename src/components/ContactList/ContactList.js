import React from 'react';
// import PropTypes from 'prop-types';
// import Contact from './Contact';
import s from './ContactList.module.css';
import { useDeleteContactMutation } from '../../redux/contactSlice';

function ContactList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();

  // return <h1>helo</h1>;

  return (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <li key={id} className={s.item}>
          {name} : <span className="">{phone}</span>
          <button
            type="button"
            className={s.btn}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   // onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
