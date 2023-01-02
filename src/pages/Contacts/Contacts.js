import css from './Contacts.module.css';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/Container/Container';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from 'redux/contactsList/contactSelectors';
import { fetchContacts } from 'redux/contactsList/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Please wait. We are loading your contacts.</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};
