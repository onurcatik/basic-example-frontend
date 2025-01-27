import React from "react";

const Footer = () => (
    <footer className="bg-gray-100 py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <ul className="text-gray-600 space-y-2">
          <li><a href="#" className="hover:underline">About Our Company</a></li>
          <li><a href="#" className="hover:underline">Our Team</a></li>
          <li><a href="#" className="hover:underline">Mission and Values</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="text-gray-600 space-y-2">
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">FAQs</a></li>
          <li><a href="#" className="hover:underline">Documentation</a></li>
          <li><a href="#" className="hover:underline">Case Studies</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
        <ul className="text-gray-600 space-y-2">
          <li><a href="#" className="hover:underline">Social Media Links</a></li>
          <li><a href="#" className="hover:underline">Newsletter Signup</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
        <form className="flex space-x-2 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Button
          </button>
        </form>
        <p className="text-gray-600">
          Stay up to date with our daily dose of awesomeness by subscribing to our newsletter!
        </p>
      </div>
    </div>
  </footer>
  );

  export default Footer;