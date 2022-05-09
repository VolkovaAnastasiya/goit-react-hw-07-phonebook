import s from './ContactList.module.css';
import { useDeleteContactMutation } from '../../redux/contactSlice';

function Contact({ data }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { name, phone, id } = data;

  return (
    <div>
      {name} : <span className="">{phone}</span>
      <button type="button" className={s.btn} onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
}

export default Contact;
