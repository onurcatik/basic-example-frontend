import React from "react";

const HeroSection = () => (
    <section
      className="relative h-[36rem] bg-cover bg-center"
      style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center text-white min-h-full">
        <h1 className="text-4xl font-extrabold mb-4">We invest in the world's potential</h1>
        <p className="text-lg mb-6">Unleashing the power of intelligent automation and insights</p>
        <div className="space-x-4">
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Get started
          </a>
          <a
            href="#"
            className="bg-transparent border border-white text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition duration-300"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );

  export default HeroSection;