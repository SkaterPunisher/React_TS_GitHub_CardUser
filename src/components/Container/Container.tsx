
import styles from './Container.module.scss';
import { ContainerProps } from './Container.props';

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>
    {children}
  </div>
);
