import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <motion.ul
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
      className="h-full divide-y divide-stone-200 rounded-2xl bg-stone-100 px-10 py-5 shadow-lg "
    >
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </motion.ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
