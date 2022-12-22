import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input type="text" name="filter" onChange={onChangeHandler} />
    </label>
  );
};
