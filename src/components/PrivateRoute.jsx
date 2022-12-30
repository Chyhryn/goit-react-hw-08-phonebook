import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthState } from 'redux/auth/authSelectors';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuthState);
  const shouldRedirect = !isRefreshing && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
