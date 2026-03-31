import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <div className="flex justify-between items-center px-50 py-7 shadow font-[Martian_Mono]">

      <h1 className="text-3xl font-bold">DigiTools</h1>

      <div className="text-sm flex gap-5">
        <a href="#" className="hover:text-red-500">Products</a>
        <a href="#" className="hover:text-red-500">Features</a>
        <a href="#" className="hover:text-red-500">Pricing</a>
        <a href="#" className="hover:text-red-500">Testimonials</a>
        <a href="#" className="hover:text-red-500">FAQ</a>
      </div>

      <div className="flex items-center gap-7">

        <div className="relative">
         <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" className="w-6 h-6 hover:scale-125 duration-300 transition"/>

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {cartCount}
          </span>
        </div>

        <a href="#" className="hover:text-red-500">Login</a>
        <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;