import { useState } from "react";
import FORM_IMG from "../images/Contact-Us.13c5d28a.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-12">

      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2 md:p-12">

        {/* Left Image Section */}
        <div className="flex flex-col items-center justify-center">

          <img
            src={FORM_IMG}
            alt="Contact QuickBite"
            className="w-full max-w-md object-contain transition duration-500 hover:scale-105"
          />

          <h2 className="mt-4 text-center text-2xl font-bold text-gray-800">
            We'd Love to Hear From You!
          </h2>

          <p className="mt-2 max-w-sm text-center text-sm leading-6 text-gray-500">
            Have a question, suggestion or feedback?
            Get in touch with our QuickBite team.
          </p>

        </div>

        {/* Right Form Section */}
        <div className="w-full">

          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Contact <span className="text-orange-500">Us</span>
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Fill out the form below and we'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Your Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Type your message here..."
                required
                className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 py-3 font-bold text-white shadow-md transition duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-95"
            >
              Send Message →
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
