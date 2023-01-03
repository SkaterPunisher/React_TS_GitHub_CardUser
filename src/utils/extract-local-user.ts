import { GithubUser, LocalGithubUser } from 'types/user';

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  bio: user.bio,
  blog: user.blog,
  company: user.company,
  created: user.created_at,
  location: user.location,
  followers: user.followers,
  following: user.following,
  repos: user.public_repos,
  twitter: user.twitter_username,
});
