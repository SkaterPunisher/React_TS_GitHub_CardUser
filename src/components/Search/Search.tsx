import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { useRef } from 'react';
import { Button } from 'ui/Button/Button';

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = searchRef.current ? searchRef.current.value : '';

    if (text) {
      onSubmit(text);
      if (searchRef.current) searchRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          ref={searchRef}
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
