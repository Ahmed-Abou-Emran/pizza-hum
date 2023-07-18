import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import { useDispatch } from 'react-redux';
import EmptyCart from './EmptyCart';

function Cart() {
  // const cart = fakeCart;
  const username = useSelector(({ user }) => user.username);
  const cart = useSelector(({ cart }) => cart.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="rounded-2xl bg-stone-100 p-10  shadow-lg">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button
          clickHandler={() => {
            dispatch(clearCart());
          }}
          type="secondary"
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
