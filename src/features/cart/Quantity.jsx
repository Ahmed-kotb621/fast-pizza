import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseCartQuantity, increaseCartQuantity } from './cartSlice';

function Quantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 font-semibold sm:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(increaseCartQuantity(pizzaId))}
      >
        +
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(decreaseCartQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default Quantity;
