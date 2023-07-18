import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function CartOverview() {
  const { cart } = useSelector((state) => state.cart);
  let totalPrice = 0;
  let totalQunatity = 0;

  cart.forEach((item) => {
    totalPrice += item.unitPrice * item.quantity;
    totalQunatity += item.quantity;
  });

  return (
    <>
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          exit={{ opacity: 0, y: 100, transition: { duration: 0.5 } }}
          className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base"
        >
          <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
            <span>
              {totalQunatity === 1 ? '1 pizza' : totalQunatity + ' pizzas'}
            </span>
            <span>€{totalPrice}</span>
          </p>
          <Link to="/cart">Open cart &rarr;</Link>
        </motion.div>
      )}
    </>
  );
}

export default CartOverview;
