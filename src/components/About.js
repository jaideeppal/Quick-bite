import FOOD_IMG from "../images/food-png-19665.jpg";


const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            Welcome to QuickBite
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Discover the
            <br />
            <span className="text-orange-500">
              World of Delicious
            </span>
            <br />
            Food!
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Your favourite food, delivered fresh to your doorstep.
            Explore delicious meals, discover amazing restaurants,
            and enjoy every bite with QuickBite.
          </p>

          <p className="text-gray-500 italic">
            "Good food, great mood, and unforgettable moments!"
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="/"
              className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300"
            >
              Explore Food
            </a>

            <a
              href="/contact"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-7 py-3 rounded-full font-semibold transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

            <img
              className="relative w-72 md:w-96 object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              src={FOOD_IMG}
              alt="Delicious food"
            />
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">

        <div className="bg-orange-50 p-6 rounded-2xl text-center">
          <div className="text-3xl mb-3">🍔</div>
          <h3 className="font-bold text-gray-800 text-lg">
            Fresh Food
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Enjoy delicious food made with fresh ingredients.
          </p>
        </div>

        <div className="bg-orange-50 p-6 rounded-2xl text-center">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="font-bold text-gray-800 text-lg">
            Easy Ordering
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Find your favourite meals with a simple experience.
          </p>
        </div>

        <div className="bg-orange-50 p-6 rounded-2xl text-center">
          <div className="text-3xl mb-3">❤️</div>
          <h3 className="font-bold text-gray-800 text-lg">
            Made with Love
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Bringing happiness to your table, one bite at a time.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;