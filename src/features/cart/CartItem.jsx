import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem } from './cartSlice';
import DeleteButton from './DeleteButton';
import Quantity from './Quantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-4">
      <p className="font-semibold">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between space-x-4">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Quantity pizzaId={pizzaId} />
        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
