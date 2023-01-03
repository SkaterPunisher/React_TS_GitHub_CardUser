import styles from './Button.module.scss';
import { ButtonProps } from './Button.props'

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
