import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="bg-yellow-500 p-4 border-b border-stone-400 sm:p-6 flex items-center justify-between">
      <Link to="/" className="tracking-widest">Fast React Pizza co. </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
