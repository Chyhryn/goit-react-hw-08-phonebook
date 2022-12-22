import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Contact } from './Contact/Contact';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
