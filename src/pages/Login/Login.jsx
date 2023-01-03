import { Container } from 'components/Container/Container';
import css from './Login.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Link } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const user = { email, password };
    dispatch(logIn(user));
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
        <div className={css.form_wrapper}>
          <Link className={css.link} to="/sign-up">
            Registration
          </Link>
          <button className={css.submit_btn} type="submit">
            Login
          </button>
        </div>
      </form>
    </Container>
  );
};
