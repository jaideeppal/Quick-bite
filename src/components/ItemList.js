
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";

const ItemList = ({ items, isCart }) => {
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const totalItems = useSelector((store) => store.cart.items);

  // Calculate item price
  const getItemPrice = (item) => {
    const info = item?.card?.info;

    return (info?.price ?? info?.defaultPrice ?? 0) / 100;
  };

  // Calculate total cart price
  const totalPrice = totalItems.reduce((total, item) => {
    return total + getItemPrice(item);
  }, 0);

  // Add item to cart
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const deliveryFee = 82;
  const platformFee = 5;
  const gst = 48.85;

  const grandTotal = totalPrice + deliveryFee + platformFee + gst;

  return (
    <>
      <div className="space-y-3">

        {items.map((item) => {
          const info = item?.card?.info;
          const price = getItemPrice(item);

          return (
            <div
              key={info?.id}
              className="flex justify-between gap-4 border-b border-gray-200 p-4 transition hover:bg-orange-50/40"
            >
              {/* Item Details */}
              <div className="w-9/12">

                <span className="mb-1 inline-block rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                  VEG
                </span>

                <h3 className="text-base font-semibold text-gray-800">
                  {info?.name}
                </h3>

                <p className="mt-1 font-medium text-gray-700">
                  ₹{price.toFixed(2)}
                </p>

                {!isCart && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {info?.description}
                  </p>
                )}

              </div>

              {/* Image and Action */}
              <div className="relative w-3/12 max-w-32">

                {info?.imageId && (
                  <img
                    className="h-24 w-full rounded-xl object-cover shadow-sm"
                    src={CDN_URL + info.imageId}
                    alt={info?.name}
                  />
                )}

                {isCart ? (
                  <button
                    onClick={() => handleRemoveItem(info?.id)}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-lg border border-red-500 bg-white px-5 py-1.5 font-bold text-red-500 shadow-md transition hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddItem(item)}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-lg border border-green-600 bg-white px-6 py-1.5 font-bold text-green-600 shadow-md transition hover:bg-green-600 hover:text-white"
                  >
                    ADD +
                  </button>
                )}

              </div>
            </div>
          );
        })}

      </div>

      {/* Bill Details */}
      {isCart && items.length > 0 && (
        <div className="mt-6 rounded-xl bg-gray-50 p-5 shadow-sm">

          <h2 className="mb-4 text-lg font-bold text-gray-800">
            Bill Details
          </h2>

          <div className="space-y-3 text-sm text-gray-600">

            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹{platformFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-3">
              <span>GST and Restaurant Charges</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>

            <div className="flex justify-between pt-2 text-base font-bold text-gray-900">
              <span>TO PAY</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>

          </div>
        </div>
      )}

    </>
  );
};

export default ItemList;
