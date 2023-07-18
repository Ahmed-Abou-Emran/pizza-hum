import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="rounded-2xl bg-stone-100 px-10 py-5 shadow-lg">
      <h1>Something went wrong 😢</h1>
      {error && <p>{error.data || error.message}</p>}
      {!error && <p> Page Not Found</p>}
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
