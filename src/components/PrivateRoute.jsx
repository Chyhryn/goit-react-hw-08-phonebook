import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthState } from 'redux/selectors';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const { isLoggedIn } = useSelector(selectAuthState);
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};
