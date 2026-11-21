import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  const { deliveryTime } = sla || {};

  return (
    <div
      data-testid="resCard"
      className="group m-4 w-[270px] overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Restaurant Image */}
      <div className="relative overflow-hidden">
        <img
          className="h-[170px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Offer Badge */}
        <div className="absolute bottom-3 left-3 rounded-md bg-blue-700 px-3 py-1 text-sm font-bold text-white shadow">
          Best Offers
        </div>

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-green-600 px-2 py-1 text-sm font-bold text-white shadow">
          ⭐ {avgRating || "New"}
        </div>
      </div>

      {/* Restaurant Details */}
      <div className="p-4">

        <h3 className="truncate text-lg font-bold text-gray-800 transition-colors group-hover:text-orange-500">
          {name}
        </h3>

        <p className="mt-1 line-clamp-1 text-sm text-gray-500">
          {cuisines?.join(", ")}
        </p>

        {/* Price and Delivery */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

          <span className="text-sm font-semibold text-gray-700">
            {costForTwo}
          </span>

          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
            🕒 {deliveryTime ? `${deliveryTime} min` : "N/A"}
          </span>

        </div>
      </div>
    </div>
  );
};


// Higher Order Component (HOC)
// Input: RestaurantCard
// Output: PromotedRestaurantCard

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute left-6 top-6 z-20 rounded-md bg-black px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
          Promoted
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
