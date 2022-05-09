import { useState } from 'react';
import { useCreateContactMutation } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();

  const reset = () => {
    setName('');
    setPhone('');
  };

  const addContacts = data => {
    contacts.find(
      contact => contact?.name?.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contact`)
      : createContact({ ...data, id: nanoid() });
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        addContacts({ name, phone });
        reset();
      }}
    >
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          onChange={handleChange}
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={s.btn} type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Add contact'}
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;
