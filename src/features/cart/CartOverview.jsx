import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
function CartOverview() {
  const state = useSelector((state) => state.cart.cart);
  const totalPrice = state.reduce((acc, cur) => {
    return (acc += cur.totalPrice);
  }, 0);
  const totalPizza = state.reduce((acc, cur) => {
    return (acc += cur.quantity);
  }, 0);

  if (!totalPizza) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-4 uppercase text-stone-300">
        <span>{totalPizza} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart" className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
