import { createSelector } from 'reselect';

export const selectContactsList = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
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
