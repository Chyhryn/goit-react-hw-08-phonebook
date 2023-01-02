import { Container } from 'components/Container/Container';
import css from './Registration.module.css';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/auth/operations';

export const Registration = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const user = { name, email, password };
    dispatch(createUser(user));
    form.reset();
  };

  return (
    <Container>
      <h1 className={css.title}>Registration form</h1>
      <form className={css.form} onSubmit={handleSubmit}>
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
