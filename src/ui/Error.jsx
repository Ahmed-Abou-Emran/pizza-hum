import { useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      exit={{ opacity: 0, y: 200, transition: { duration: 1 } }}
      className="rounded-2xl bg-stone-100 px-10 py-5 shadow-lg"
    >
      <h1>Something went wrong 😢</h1>
      {error && <p>{error.data || error.message}</p>}
      {!error && <p> Page Not Found</p>}
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </motion.div>
  );
}

export default Error;
