import React from "react";


const Section = () => (
    <section className="container mx-auto px-3 py-16 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex-1 mb-8 lg:mb-0">
        <img
          src="https://placehold.jp/300x300.png"
          alt="Page"
          className="w-full lg:w-3/4 h-auto rounded-lg"
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-4">
          Let's create more tools and ideas that bring us together.
        </h2>
        <p className="text-gray-600 mb-6">
          Codemarch helps you connect with friends and communities of people who share your interests. Connecting with your
          friends and family as well as discovering new ones is easy with features like Groups.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Get started →
        </a>
      </div>
    </section>
  );

  export default Section;