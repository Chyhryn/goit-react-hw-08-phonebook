import { Routes, Route } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { Login } from 'pages/Login/Login';
import { Registration } from 'pages/Registration/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { selectAuthState } from 'redux/auth/authSelectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useSelector(selectAuthState);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          {!isRefreshing && (
            <>
              <Route index element={<PrivateRoute component={Contacts} />} />
              <Route
                path="login"
                element={<RestrictedRoute component={Login} />}
              />
              ;
              <Route
                path="sign-up"
                element={<RestrictedRoute component={Registration} />}
              />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
};
