import { Container } from 'components/Container/Container';
import css from './Login.module.css';
// import { useDispatch } from 'react-redux';
export const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;
    console.log(email.value, password.value);
    form.reset();
  };
  return (
    <Container>
      <h1 className={css.title}>Login form</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button className={css.submit_btn} type="submit">
          Login
        </button>
      </form>
    </Container>
  );
};
