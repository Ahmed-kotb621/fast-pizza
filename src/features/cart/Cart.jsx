import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-6 py-4 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 py-7">
        {cart.map((cart) => (
          <CartItem item={cart} key={cart.pizzaId} />
        ))}
      </ul>
      <div className="space-x-4">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondry" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
