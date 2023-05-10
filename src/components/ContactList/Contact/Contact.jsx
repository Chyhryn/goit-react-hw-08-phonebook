import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsList/operations';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onClick = e => {
    const id = e.target.parentNode.id;
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact_item} id={contact._id}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button className={css.delete_btn} onClick={onClick} type="button">
        Delete
      </button>
    </li>
  );
};

Contact.prototype = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
  }).isRequired,
};
