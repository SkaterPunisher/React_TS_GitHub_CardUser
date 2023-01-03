import { LocalGithubUser } from 'types/user';

export type UserInfoProps = Pick<
  LocalGithubUser,
  'blog' | 'company' | 'location' | 'twitter'
> & {};
