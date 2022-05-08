import React from 'react';
// import PropTypes from 'prop-types';
// import Contact from './Contact';
import s from './ContactList.module.css';
import { useFetchContactsQuery } from '../../redux/contactSlice';

function ContactList() {
  const contacts = useFetchContactsQuery();
  const { data, isFetching, error } = contacts;
  console.log('data', data);
  console.log('isFetching', isFetching);
  console.log('error', error);

  // return <h1>helo</h1>;

  return (
    <ul>
      {data.map(({ name, phone, id }) => (
        <li key={id} className={s.item}>
          {name} : <span className="">{phone}</span>
          <button type="button" className={s.btn} onClick={() => {}}>
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
