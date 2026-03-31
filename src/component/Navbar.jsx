const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-50 py-7 shadow font-[Martian_Mono] gap-20">
            <div> 
                <h1 className="text-3xl font-bold">DigiTools</h1>
            </div>
        
            <div className="text-sm flex gap-5">
                <a href="#" className="hover:text-red-500 active:text-red-600">Products</a>
                <a href="#" className="hover:text-red-500 active:text-red-600">Features</a>
                <a href="#" className="hover:text-red-500 active:text-red-600">Pricing</a>
                <a href="#" className="hover:text-red-500 active:text-red-600">Testimonials</a>
                <a href="#" className="hover:text-red-500 active:text-red-600">FAQ</a>
            </div>
        
            <div className="text-sm flex justify-between items-center gap-7">
                <a href="#"> <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" className="w-6 h-6 hover:scale-125 duration-300 transition"/> </a>
                <a href="#" className="hover:text-red-500">Login</a>
                <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;