import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthState } from 'redux/auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuthState);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
