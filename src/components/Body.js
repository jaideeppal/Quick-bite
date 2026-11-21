import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import resList from "../components/mocks/res-list.json";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [buttonChecker, setButtonChecker] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Restaurant Data
  const fetchData = () => {
    const restaurants =
      resList.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      resList.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  // Search Restaurant
  const handleSearch = () => {
    const searchValue = searchText.toLowerCase().trim();

    const filteredList = listOfRestaurants.filter((res) => {
      const name = res?.info?.name?.toLowerCase() || "";
      const cuisines =
        res?.info?.cuisines?.join(" ").toLowerCase() || "";

      return (
        name.includes(searchValue) ||
        cuisines.includes(searchValue)
      );
    });

    setFilteredRestaurant(filteredList);
    setButtonChecker(false);
  };

  // Clear Search
  const handleClearSearch = () => {
    setSearchText("");
    setFilteredRestaurant(listOfRestaurants);
    setButtonChecker(false);
  };

  // Top Rated Restaurants
  const handleTopRated = () => {
    const topRatedRestaurant = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4
    );

    setFilteredRestaurant(topRatedRestaurant);
    setButtonChecker(true);
  };

  // All Restaurants
  const handleAllRestaurants = () => {
    setFilteredRestaurant(listOfRestaurants);
    setSearchText("");
    setButtonChecker(false);
  };

  // Online Status
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <h1 className="text-xl md:text-2xl font-bold text-red-500 text-center">
          Looks like you're offline! Please check your internet connection.
        </h1>
      </div>
    );
  }

  // Loading
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  // Open Restaurant Menu
  if (selectedRestaurant) {
    return (
      <div>
        <button
          onClick={() => setSelectedRestaurant(null)}
          className="m-5 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          ← Back to Restaurants
        </button>

        <RestaurantMenu resId={selectedRestaurant} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-block bg-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Welcome to QuickBite 🍔
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Delicious Food,
            <span className="text-orange-500">
              {" "}Delivered Fast!
            </span>
          </h1>

          <p className="text-gray-600 mt-4 text-sm md:text-lg">
            Discover the best restaurants and enjoy your favourite food.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mt-9">
            <div className="flex items-center bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl focus-within:ring-2 focus-within:ring-orange-400 transition duration-300 overflow-hidden">

              <div className="pl-4 md:pl-6 text-orange-500 text-xl">
                🔍
              </div>

              <input
                className="flex-1 min-w-0 px-3 md:px-4 py-4 outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base"
                data-testid="searchInput"
                type="text"
                placeholder="Search restaurants or cuisines..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              {searchText && (
                <button
                  onClick={handleClearSearch}
                  className="px-2 text-gray-400 hover:text-red-500 text-2xl"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

              <button
                onClick={handleSearch}
                className="m-1.5 px-4 md:px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300"
              >
                Search
              </button>

            </div>

            <p className="text-gray-500 text-xs mt-3">
              Find your favourite food on QuickBite ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Restaurant Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-7">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Restaurants with Online Food Delivery
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Indore, Madhya Pradesh, India
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Showing {filteredRestaurant.length} of{" "}
              {listOfRestaurants.length} restaurants
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3">

            <button
              onClick={handleTopRated}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition duration-300 ${
                buttonChecker
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white border border-orange-300 text-orange-600 hover:bg-orange-50"
              }`}
            >
              ⭐ Top Rated
            </button>

            <button
              onClick={handleAllRestaurants}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition duration-300 ${
                !buttonChecker
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white border border-orange-300 text-orange-600 hover:bg-orange-50"
              }`}
            >
              All Restaurants
            </button>

          </div>
        </div>

        <p className="text-gray-500 text-sm mb-5">
          Click on a restaurant card to view its menu and place your order.
        </p>

        {/* Restaurant Cards */}
        {filteredRestaurant.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <div className="text-6xl mb-4">🍽️</div>

            <h2 className="text-xl font-bold text-gray-800">
              No Restaurants Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching with another restaurant name or cuisine.
            </p>

            <button
              onClick={handleClearSearch}
              className="mt-5 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition"
            >
              Show All Restaurants
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center md:justify-start gap-6">

            {filteredRestaurant.map((restaurant) => (
              <div
                key={restaurant.info.id}
                onClick={() =>
                  setSelectedRestaurant(restaurant.info.id)
                }
                className="cursor-pointer"
              >
                {restaurant.info.promoted ? (
                  <RestaurantCardPromoted
                    resData={restaurant.info}
                  />
                ) : (
                  <RestaurantCard
                    resData={restaurant.info}
                  />
                )}
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Body;