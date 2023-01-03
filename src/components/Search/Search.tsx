import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'ui/Button/Button';

export type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type='text'
          className={styles.textField}
          id='search'
          name='username'
          placeholder='Введите имя пользователя на GitHub...'
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Поиск</Button>
      </div>
    </form>
  );
};
