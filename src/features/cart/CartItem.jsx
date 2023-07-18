import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import {
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} from './cartSlice';
import { useDispatch } from 'react-redux';
function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;
  const totalPrice = quantity * unitPrice;
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

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

        <Button
          clickHandler={() => dispatch(deleteFromCart({ pizzaId }))}
          type="small"
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
