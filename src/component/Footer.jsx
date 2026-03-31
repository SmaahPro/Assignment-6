const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white font-[Martian_Mono] py-16 px-50">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Digitools</h1>
          <p className="text-xs opacity-70">© 2026 Digitools. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white">Product</h2>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Features</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Pricing</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Templates</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Integration</a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white">Company</h2>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">About</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Blog</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Careers</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Press</a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white">Resources</h2>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Documentation</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Help Center</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Community</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition">Contact</a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-white">Social Links</h2>
          <div className="flex gap-5 mt-2">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5 hover:scale-125 transition filter grayscale"/></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" className="w-5 h-5 hover:scale-125 transition filter grayscale"/></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" className="w-5 h-5 hover:scale-125 transition filter grayscale"/></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 max-w-7xl mx-auto"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-4 text-xs text-gray-400">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;