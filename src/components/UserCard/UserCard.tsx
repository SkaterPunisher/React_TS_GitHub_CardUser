import styles from './UserCard.module.scss';
import { UserCardProps } from './UserCard.props';
import { UserStat } from './UserStat/UserStat';
import { UserTitle } from './UserTitle/UserTitle';

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${styles.bio}${!props.bio ? '' : `${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
    </div>
  );
};
