import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectAuthState } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p className={css.user_email}>Hello {user.email}</p>
      <button className={css.button} type="button" onClick={onClickHandler}>
        Logout
      </button>
    </>
  );
};
