import { Container } from 'components/Container/Container';
import css from './Registration.module.css';
export const Registration = () => {
  return (
    <Container>
      <h1 className={css.title}>Registration form</h1>
      <form className={css.form}>
        <label className={css.label}>
          Name
          <input type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button className={css.submit_btn} type="submit">
          Sign up
        </button>
      </form>
    </Container>
  );
};
