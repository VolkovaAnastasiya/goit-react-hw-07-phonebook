import React from 'react';
import s from './ContactList.module.css';
// import PropTypes from 'prop-types';
import Contact from './Contact';

function ContactList({ contacts }) {
  // return <h1>helo</h1>;

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <Contact data={contact} />
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
