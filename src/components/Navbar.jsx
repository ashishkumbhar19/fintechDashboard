import React from "react";

function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">@IndiaDataHub</div>

      {/* Search Box */}
      <div className="flex-grow mx-20">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-2xl px-4 py-2 ml-40 rounded-lg border border-gray-300 text-red-500 focus:outline-none"
        />
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-6">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/about" className="hover:text-gray-300">About</a>
        <a href="/contact" className="hover:text-gray-300">Contact</a>
      </div>

      {/* Login Section */}
      <div className="ml-4">
        <a
          href="/login"
          className="flex items-center gap-2 hover:text-gray-300"
          title="Login to your account"
        >
          <i className="fas fa-user"></i> Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
