import { LocalGithubUser } from 'types/user';

export type UserTitleProps = Pick<
LocalGithubUser,
'login' | 'name' | 'created'
> & { 
  }