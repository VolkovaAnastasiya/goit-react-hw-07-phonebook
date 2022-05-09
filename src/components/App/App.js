import { useState } from 'react';
import ContactForm from 'components/ContactForm';

import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useFetchContactsQuery } from 'redux/contactSlice';
import './App.module.css';
import { TailSpin } from 'react-loader-spinner';
// import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { data, isFetching } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  // const addContacts = data => {
  //   contacts.find(
  //     contact => contact?.name?.toLowerCase() === data.name.toLowerCase()
  //   )
  //     ? alert(`${data.name} is already in contact`)
  //     : dispatch(setItems({ ...data, id: nanoid() }));
  // };

  // const getVisibleContact = () => {
  //   const normalizedfilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedfilter)
  //   );
  // };

  // const changeFilter = e => {
  //   dispatch(setFilter(e.currentTarget.value));
  // };
  // const visibleContact = getVisibleContact();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={data} />
      {/* <ContactForm /> */}
      {isFetching && <TailSpin color="#00BFFF" height={80} width={80} />}

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={setFilter} />
      {/* {data && <ContactList contacts={getVisibleContacts(data, filter)} />} */}
      {data && <ContactList contacts={data} />}
    </div>
  );
}

export default App;
