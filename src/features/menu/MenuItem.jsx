import React from 'react';
import Button from '../../ui/Button';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../utils/helpers';
import {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
function MenuItem({ pizza }) {
  const {
    id: pizzaId,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const quantity = cart.find((item) => item.pizzaId === pizzaId)?.quantity || 0;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut &&
            (quantity < 1 ? (
              <Button
                clickHandler={() => {
                  dispatch(
                    addToCart({ pizzaId, name, unitPrice, quantity: 1 })
                  );
                }}
                type="small"
              >
                Add to cart
              </Button>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                exit={{ opacity: 0 }}
                className="flex space-x-5"
              >
                <Button
                  clickHandler={() => {
                    dispatch(deleteFromCart({ pizzaId }));
                  }}
                  type="danger"
                >
                  Delete
                </Button>
                <div className="flex items-center space-x-2">
                  <Button
                    clickHandler={() => {
                      dispatch(decreaseQuantity({ pizzaId }));
                      if (quantity - 1 == 0) {
                        dispatch(deleteFromCart({ pizzaId }));
                      }
                    }}
                    type="small"
                  >
                    -
                  </Button>
                  <p className="text-sm">{quantity}</p>
                  <Button
                    clickHandler={() => {
                      dispatch(increaseQuantity({ pizzaId }));
                    }}
                    type="small"
                  >
                    +
                  </Button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
