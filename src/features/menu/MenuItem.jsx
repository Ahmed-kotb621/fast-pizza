import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex grow gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-md ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col">
        <p className="font-semibold">{name}</p>
        <p className="capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex grow items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase text-stone-500">Sold out</p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
