function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase text-stone-800 text-stone-900 transition-all transition-colors duration-300 duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-600 sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}

export default Button;
