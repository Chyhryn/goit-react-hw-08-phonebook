import { createSelector } from 'reselect';
import { selectContactsList } from 'redux/contactsList/contactSelectors';

export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterValue],
  (contacts, filterValue) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    return filteredContacts;
  }
);
