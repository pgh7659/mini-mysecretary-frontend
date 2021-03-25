import { Redirect } from 'react-router';

export default function LoginCallback({ history }) {
  const token =
    history.location.search && history.location.search.split('token=').pop();
  localStorage.setItem('token', token || null);
  const redirectPath = token ? '/todo' : '/login';

  return <Redirect to={redirectPath} />;
}
