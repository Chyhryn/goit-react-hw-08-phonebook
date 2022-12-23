import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { Login } from 'pages/Login/Login';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />;
        </Route>
      </Routes>
    </>
  );
};
