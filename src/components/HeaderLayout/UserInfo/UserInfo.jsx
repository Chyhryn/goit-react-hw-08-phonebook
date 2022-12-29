import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectAuthState } from 'redux/selectors';

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
