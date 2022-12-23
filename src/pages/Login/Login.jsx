import { Container } from 'components/Container/Container';
import css from './Login.module.css';
export const Login = () => {
  return (
    <Container>
      <h1 className={css.title}>Login form</h1>
      <form className={css.form}>
        <label className={css.label}>
          Email
          <input type="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" />
        </label>
        <button className={css.submit_btn} type="submit">
          Login
        </button>
      </form>
    </Container>
  );
};
