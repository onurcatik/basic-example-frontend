import React from "react";

const ContactUsSection = () => (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-12">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
      </p>
      <div className="max-w-lg mx-auto">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-left text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Let us know how we can help you"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">Your message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Leave a comment..."
              required
              className="w-full px-4 py-2 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300 w-full"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
  
  export default ContactUsSection;
  