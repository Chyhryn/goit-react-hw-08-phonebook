import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

// export const Login = () => {
//   return (
//     <form>
//       <label htmlFor="">
//         Email
//         <input type="email" />
//       </label>
//       <label htmlFor="">
//         Password
//         <input type="password" />
//       </label>
//       <button tyoe="submit">Login</button>
//     </form>
//   );
// };

// //  <Route path="login" element={<Login />} />;
