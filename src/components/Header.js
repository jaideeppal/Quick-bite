import { Link } from "react-router-dom";
import LOGO_URL from "../images/food-png-19673.png";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="mx-auto flex w-11/12 max-w-7xl flex-col items-center justify-between py-3 md:flex-row">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-14 w-14 object-contain md:h-16 md:w-16"
              src={LOGO_URL}
              alt="Food App Logo"
            />
            <span className="text-2xl font-extrabold tracking-tight text-orange-500">
             Quick Bite
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-2 md:mt-0 md:gap-4">

          <li>
            <Link
              to="/"
              className="rounded-full px-3 py-2 font-semibold text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 md:px-4"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="rounded-full px-3 py-2 font-semibold text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 md:px-4"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="rounded-full px-3 py-2 font-semibold text-gray-700 transition hover:bg-orange-50 hover:text-orange-500 md:px-4"
            >
              Contact
            </Link>
          </li>

          {/* Cart */}
          <li>
            <Link
              to="/cart"
              className="relative flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 font-semibold text-orange-600 transition hover:bg-orange-100"
            >
              <span className="text-xl">🛒</span>
              <span>Cart</span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                {cartItems?.length ?? 0}
              </span>
            </Link>
          </li>

          {/* Login */}
          <li>
            <Link
              to="/login"
              className="rounded-full bg-orange-500 px-6 py-2 font-semibold text-white shadow-sm transition duration-300 hover:bg-orange-600 hover:shadow-md"
            >
              Login
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;