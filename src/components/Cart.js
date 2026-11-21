import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Cart Header */}
        <div className="text-center mb-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            QuickBite
          </span>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Your Cart 🛒
          </h1>

          <p className="text-gray-500 mt-2">
            Review your favourite food before checkout.
          </p>
        </div>

        {/* Cart Content */}
        <div className="bg-white rounded-2xl shadow-md p-5 md:p-8">

          {cartItems.length > 0 ? (
            <>
              {/* Cart Information */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">

                <h2 className="text-xl font-bold text-gray-800">
                  Cart Items ({cartItems.length})
                </h2>

                <button
                  onClick={handleClearCart}
                  className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-5 py-2 rounded-full font-semibold transition duration-300"
                >
                  Clear Cart
                </button>

              </div>

              {/* Items List */}
              <ItemList items={cartItems} isCart={true} />

            </>
          ) : (

            /* Empty Cart */
            <div className="text-center py-16">

              <div className="text-7xl mb-6">
                🛒
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                Your Cart is Empty!
              </h2>

              <p className="text-gray-500 mt-3 mb-8">
                Looks like you haven't added anything to your cart yet.
                Let's find something delicious!
              </p>

              <button
                onClick={() => (window.location.href = "/")}
                className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition duration-300"
              >
                Browse Menu
              </button>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Cart;