import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from 'redux/contactsList/contactSelectors';
import { addContact } from 'redux/contactsList/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { name, number };

    const checkDuplicatedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    checkDuplicatedContact
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.submit_btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
