import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'rounded-full bg-yellow-500 inline-block font-semibold uppercase text-stone-800 text-stone-900 transition-all transition-colors duration-300 duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-600 ';

  const className = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' px-2 py-1 sm:px-2 sm:py-1 text-sm',
    round: base + ' px-3.5 py-2 sm:px-3.5 sm:py-2 text-sm',
    secondry:
      'rounded-full bg-transperant border-2 border-stone-200  inline-block font-semibold uppercase text-stone-800  transition-all transition-colors duration-300 duration-300 hover:bg-stone-500 focus:bg-stone-200 px-4 py-3 sm:px-6 sm:py-4 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-600 ',
  };

  if (to)
    return (
      <Link to={to} className={className[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={className[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={className[type]}>
      {children}
    </button>
  );
}

export default Button;
