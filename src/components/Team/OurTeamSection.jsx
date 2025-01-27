import React from 'react';

const TeamMemberCard = ({ name, title, description, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-500 mb-4">{title}</p>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="flex justify-center space-x-4">
      <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook"></i></a>
      <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
      <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-github"></i></a>
      <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-dribbble"></i></a>
    </div>
  </div>
);

const OurTeamSection = () => (
  <section className="container mx-auto px-4 py-16 text-center">
    <h2 className="text-4xl font-bold mb-6">Our Team</h2>
    <p className="text-gray-600 mb-12">Explore the whole collection of open-source web components and elements built with utility classes from Tailwind</p>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <TeamMemberCard
        name="Bonnie Green"
        title="CEO & Web Developer"
        description="Bonnie drives the technical strategy of the flowbite platform and brand."
        image="https://placehold.jp/300x300.png"
      />
      <TeamMemberCard
        name="Jese Leos"
        title="CTO"
        description="Jese drives the technical strategy of the flowbite platform and brand."
        image="https://placehold.jp/300x300.png"
      />
      <TeamMemberCard
        name="Michael Gough"
        title="Senior Front-end Developer"
        description="Michael drives the technical strategy of the flowbite platform and brand."
        image="https://placehold.jp/300x300.png"
      />
      <TeamMemberCard
        name="Michael Gough"
        title="Senior Front-end Developer"
        description="Michael drives the technical strategy of the flowbite platform and brand."
        image="https://placehold.jp/300x300.png"
      />
      <TeamMemberCard
        name="Michael Gough"
        title="Senior Front-end Developer"
        description="Michael drives the technical strategy of the flowbite platform and brand."
        image="https://placehold.jp/300x300.png"
      />
      <TeamMemberCard
        name="Lana Byrd"
        title="Marketing & Sales"
        description="Lana drives the technical strategy of the flowbite platform and brand."
        image="https://placehold.jp/300x300.png"
      />
    </div>
  </section>
);

export default OurTeamSection;
