import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { Login } from 'pages/Login/Login';
import { Registration } from 'pages/Registration/Registration';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />;
          <Route path="sign-up" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
};
