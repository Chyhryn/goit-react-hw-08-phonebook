import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import css from './HeaderLayout.module.css';

export const HeaderLayout = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <div className={css.headerThumb}>
          <div>Hello</div>
          <div>
            <NavLink className={css.link} to="/login">
              Login
            </NavLink>
            <NavLink className={css.link} to="/sign-up">
              Registration
            </NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
