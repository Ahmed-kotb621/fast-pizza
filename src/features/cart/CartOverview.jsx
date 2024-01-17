import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 p-4 sm:p-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 uppercase space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="uppercase">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
