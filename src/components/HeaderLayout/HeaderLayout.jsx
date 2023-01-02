import { Outlet } from 'react-router';
import css from './HeaderLayout.module.css';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectAuthState } from 'redux/auth/authSelectors';

export const HeaderLayout = () => {
  const { isLoggedIn } = useSelector(selectAuthState);
  return (
    <>
      <header className={css.header}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </>
  );
};
