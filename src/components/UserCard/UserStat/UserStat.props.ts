import { LocalGithubUser } from 'types/user';

export type UserStatProps = Pick<
  LocalGithubUser,
  'repos' | 'followers' | 'following'
> & {};
