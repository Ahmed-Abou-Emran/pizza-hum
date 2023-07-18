import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from './Button';

function Home() {
  const username = useSelector(({ user }) => user.username);
  return (
    <div className="my-10 rounded-2xl bg-stone-100 px-10 py-5 text-center shadow-lg sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' && <CreateUser />}
      {username !== '' && (
        <Button type="primary" to="menu">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
