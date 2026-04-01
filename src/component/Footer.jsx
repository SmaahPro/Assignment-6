const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white font-[Martian_Mono] py-12 md:py-16 px-6 md:px-20 lg:px-50">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-8">

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Digitools</h1>
          <p className="text-[10px] md:text-xs opacity-70 leading-relaxed">
            Building the next generation of digital tools for modern professionals.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-white text-sm md:text-base">Product</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Features</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Pricing</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Templates</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Integration</a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-white text-sm md:text-base">Company</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">About</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Blog</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Careers</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Press</a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-white text-sm md:text-base">Resources</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Documentation</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Help Center</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Community</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-white text-sm md:text-base">Social Links</h2>
          <div className="flex gap-5">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5 hover:scale-125 transition filter grayscale invert opacity-70 hover:opacity-100" alt="Instagram"/></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" className="w-5 h-5 hover:scale-125 transition filter grayscale invert opacity-70 hover:opacity-100" alt="Facebook"/></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" className="w-5 h-5 hover:scale-125 transition filter grayscale invert opacity-70 hover:opacity-100" alt="Twitter"/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 max-w-7xl mx-auto"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-6 text-[10px] md:text-xs text-gray-500 gap-4">
        <p className="order-2 md:order-1 text-center md:text-left">
          © 2026 Digitools. All rights reserved.
        </p>
        <div className="flex gap-4 order-1 md:order-2 flex-wrap justify-center">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;