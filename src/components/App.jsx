import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { Login } from 'pages/Login/Login';
import { Registration } from 'pages/Registration/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import { selectAuthState } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useSelector(selectAuthState);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />;
            <Route path="sign-up" element={<Registration />} />
          </Route>
        </Routes>
      </>
    )
  );
};
