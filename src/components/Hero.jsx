import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/movie night.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: Overlay for better text readability */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-4">
        <h1 className="text-5xl font-bold leading-tight mb-4 max-w-lg">Designers are meant to be loved, not to be understood.</h1>
        <p className="text-lg mb-8 max-w-lg">
          The sudden hunch, the creative leap of mind that "sees"
          in a flash how to solve a problem in a simple way, is
          something quite different.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-semibold transition-colors duration-200">Get Started</button>
          <button className="bg-white hover:bg-gray-200 text-gray-800 py-3 px-8 rounded-md text-lg font-semibold transition-colors duration-200">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 