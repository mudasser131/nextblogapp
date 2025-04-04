import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center px-8 md:px-20 py-16 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white">
        Contact Us
      </h1>
      <p className="text-lg text-center my-4 text-gray-600 dark:text-gray-400 leading-relaxed">
        Feel free to get in touch with us. We’d love to hear from you!
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-white dark:bg-gray-850 shadow-lg rounded-xl p-8 space-y-6 mt-8 border border-gray-200 dark:border-gray-700">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
            placeholder="Your message here..."
            required
            rows="5"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
