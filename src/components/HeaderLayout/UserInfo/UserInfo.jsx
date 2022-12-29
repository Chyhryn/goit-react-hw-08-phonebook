import { useSelector } from 'react-redux';
import { selectAuthState } from 'redux/selectors';

export const UserInfo = () => {
  const { user } = useSelector(selectAuthState);
  return (
    <>
      <div>Hello {user.name}</div>
      <button type="button">Logout</button>
    </>
  );
};
