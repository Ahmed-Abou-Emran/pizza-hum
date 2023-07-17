import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteFromCart } from './cartSlice';
import { useDispatch } from 'react-redux';
function CartItem({ item }) {
  const { id, name, quantity, unitPrice } = item;
  const totalPrice = quantity * unitPrice;
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button
          clickHandler={() => dispatch(deleteFromCart({ id }))}
          type="small"
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
