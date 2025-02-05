import React from 'react'

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center px-8 md:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
      <p className="text-lg text-center my-4 text-gray-500">
        Feel free to get in touch with us. We’d love to hear from you!
      </p>

      <form className="w-full max-w-lg space-y-6 mt-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-lg">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 mt-2 border rounded-md border-gray-300"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-2 border rounded-md border-gray-300"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg">Your Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 mt-2 border rounded-md border-gray-300"
            placeholder="Your message here..."
            required
            rows="5"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>

)
}

export default Contact