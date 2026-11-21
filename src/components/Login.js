import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [isAgreed, setIsAgreed] = useState(false);

  // Update input values
  const updateUserDetail = (key, value) => {
    setUserDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSignIn && !isAgreed) {
      alert("Please accept the terms and policy.");
      return;
    }

    console.log({
      name: userName,
      ...userDetails,
      mode: isSignIn ? "Sign In" : "Sign Up",
    });

    // Authentication API integration can be added here.
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,c_fill/f44bc9708c514cd2dd6ae0d8b4677214"
        alt="Food background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Login Card */}
      <div className="relative z-10 my-10 w-11/12 max-w-md rounded-3xl border border-white/30 bg-white/95 p-7 shadow-2xl backdrop-blur-md sm:p-10">

        {/* Logo / Heading */}
        <div className="mb-8 text-center">

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Quick<span className="text-orange-500">Bite</span>
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Delicious food is just one click away!
          </p>

        </div>

        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {isSignIn ? "Welcome Back!" : "Create Account"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {isSignIn
              ? "Sign in to continue your food journey."
              : "Join QuickBite and order your favourite food."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          {!isSignIn && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              value={userDetails.email}
              onChange={(e) =>
                updateUserDetail("email", e.target.value)
              }
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={userDetails.password}
                onChange={(e) =>
                  updateUserDetail("password", e.target.value)
                }
                placeholder="Enter your password"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-20 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-orange-600 hover:text-orange-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Terms and Policy */}
          {!isSignIn && (
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 accent-orange-500"
              />

              <label className="text-xs text-gray-600">
                I agree to the Terms & Conditions and Privacy Policy.
              </label>
            </div>
          )}

          {/* Forgot Password */}
          {isSignIn && (
            <div className="text-right">
              <button
                type="button"
                className="text-sm font-semibold text-orange-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 font-bold text-white shadow-lg transition duration-300 hover:bg-orange-600 hover:shadow-orange-200"
          >
            {isSignIn ? "Sign In" : "Create Account"}
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* Toggle Sign In / Sign Up */}
        <p className="text-center text-sm text-gray-600">
          {isSignIn
            ? "New to QuickBite?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() => {
              setIsSignIn(!isSignIn);
              setShowPassword(false);
            }}
            className="ml-1 font-bold text-orange-600 hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;
