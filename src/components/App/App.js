import { useState } from 'react';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useFetchContactsQuery } from 'redux/contactSlice';
import './App.module.css';

function App() {
  const { data } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');
  const contacts = data;

  const getVisibleContacts = () => {
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={data} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={setFilter} />
      {data && <ContactList contacts={getVisibleContacts()} />}
    </div>
  );
}

export default App;
