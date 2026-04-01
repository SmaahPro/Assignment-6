import React, { useState } from "react";

const Navbar = ({ cartCount }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-between items-center px-6 md:px-20 lg:px-50 py-5 md:py-7 shadow font-[Martian_Mono] sticky top-0 bg-white z-50">
      
      <h1 className="w-1/2 md:w-auto text-xl md:text-2xl lg:text-3xl font-bold">
        DigiTools
      </h1>

      <div className="hidden lg:flex w-full order-3 md:order-none md:w-full lg:w-auto flex-wrap justify-center text-sm gap-5 mt-4 lg:mt-0">
        <a href="#products" className="hover:text-red-500">Products</a>
        <a href="#features" className="hover:text-red-500">Features</a>
        <a href="#pricing" className="hover:text-red-500">Pricing</a>
        <a href="#testimonials" className="hover:text-red-500">Testimonials</a>
        <a href="#faq" className="hover:text-red-500">FAQ</a>
      </div>

      <div className="w-1/2 md:w-auto flex justify-end items-center gap-4 md:gap-7">
        
        <div className="relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            className="w-5 h-5 md:w-6 md:h-6 hover:scale-125 duration-300 transition"
            alt="Cart Icon"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {cartCount}
          </span>
        </div>

        <a href="#" className="hidden lg:block hover:text-red-500">
          Login
        </a>

        <button className="hidden lg:block bg-violet-600 text-white px-3 md:px-4 py-2 rounded hover:bg-red-500 transition text-xs md:text-sm">
          Get Started
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl active:scale-90 transition"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="w-full flex flex-col gap-3 mt-5 lg:hidden text-sm">
          <a
            href="#products"
            className="text-center py-2 rounded-lg active:bg-gray-200 active:text-red-600 transition"
          >
            Products
          </a>
          <a
            href="#features"
            className="text-center py-2 rounded-lg active:bg-gray-200 active:text-red-600 transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-center py-2 rounded-lg active:bg-gray-200 active:text-red-600 transition"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-center py-2 rounded-lg active:bg-gray-200 active:text-red-600 transition"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-center py-2 rounded-lg active:bg-gray-200 active:text-red-600 transition"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-center py-2 rounded-lg active:bg-gray-200 active:text-red-600 transition"
          >
            Login
          </a>
          <button className="bg-violet-600 text-white py-2 rounded-lg active:text-orange-900 transition">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;