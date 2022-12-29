import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import css from './HeaderLayout.module.css';
import { UserInfo } from './UserInfo/UserInfo';
import { AuthNav } from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectAuthState } from 'redux/selectors';

export const HeaderLayout = () => {
  const { isLoggedIn } = useSelector(selectAuthState);
  return (
    <>
      <header className={css.header}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <div className={css.headerThumb}>
          {isLoggedIn ? <UserInfo /> : <AuthNav />}
        </div>
      </header>
      <Outlet />
    </>
  );
};
