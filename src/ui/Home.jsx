import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser'
import Button from './Button';

function Home() {
  const username = useSelector(state=>state.user.username);
  return (
    <div className='text-center my-10 sm:my-16'>
      <h1 className="text-xl md:text-3xl text-stone-700 font-semibold mb-8">
        The best pizza.
        <br />
        <span className="text-yellow-500">

        Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? <CreateUser /> : <Button type='primary' to='/menu'>Continue Ordering, {username}</Button>}
    </div>
  );
}

export default Home;
