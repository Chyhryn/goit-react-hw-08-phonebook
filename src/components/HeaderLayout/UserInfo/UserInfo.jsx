import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectAuthState } from 'redux/auth/authSelectors';

export const UserInfo = () => {
  const { user } = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div>Hello {user.name}</div>
      <button type="button" onClick={onClickHandler}>
        Logout
      </button>
    </>
  );
};
