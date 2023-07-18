import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector(({ user }) => user.username);
  if (!username) {
    return null;
  }

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
