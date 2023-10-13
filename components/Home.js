import React from "react";

const HomeX = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        <p className="mt-2">Discover amazing things!</p>
      </header>
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-gray-700">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-gray-700 mb-8">
          Sign up now to access all the amazing features!
        </p>
        <a href="#" className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full">
          Sign Up
        </a>
      </section>
      <section className="container mx-auto mt-8">
        {/* Feature Sections */}
        {/* ... */}

        {/* New Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700">Learn more about who I am and what I do.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Courses</h2>
            <p className="text-gray-700">Explore the courses I offer.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">What I Do</h2>
            <p className="text-gray-700">Find out about my expertise and services.</p>
          </div>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-700">Get in touch with me.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeX;
