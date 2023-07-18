import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="rounded-2xl bg-stone-100 p-10 shadow-lg">
      <LinkButton to="/menu" type="secondary">
        &larr; Back to menu
      </LinkButton>

      <p className=" py-4 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
