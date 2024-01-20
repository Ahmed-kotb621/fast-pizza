import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-4">
      <p className="font-semibold">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between space-x-4">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
