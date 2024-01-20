// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-6 py-4">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="flex gap-2">
          {priority && (
            <span className="rounded-full bg-red-600 px-2 py-1 text-stone-900">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-600 px-2 py-1 text-stone-900">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-between rounded-md bg-stone-200 p-5">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((cart) => (
          <OrderItem item={cart} key={cart.id} />
        ))}
      </ul>
      <div className="space-y-3 rounded-md bg-stone-200 p-5">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-l font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
