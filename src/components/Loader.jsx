import React from 'react';

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#1a1f26] z-50"
      style={{ backgroundImage: `url(/assets/about.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center">
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-sky-500 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center rounded-full overflow-hidden">
            <img
              src="/logo.png"
              alt="Devnex HiTech Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Welcome to <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">Devnex HiTech</span>
        </h1>
        <p className="text-lg text-[#E7EBEE] mt-2">
          We transform your ideas into reality.
        </p>
        <div className="mt-6 w-48 h-2 bg-[#333] rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-sky-500 to-purple-500 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;