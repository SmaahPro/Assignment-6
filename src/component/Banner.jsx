import BannerImg from "../assets/banner.png";
import CircleImg from "../myicons/circle.png";
import PlayImg from "../assets/play.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-50 py-10 md:py-20 bg-gray-50 font-[Martian_Mono] gap-10 md:gap-20">

      <div className="w-full md:w-auto text-center md:text-left">
        <div className="relative inline-flex items-center gap-2 justify-center md:justify-start mb-2">
          <span className="absolute inset-0 bg-violet-200 rounded-full z-0"></span>
          <img src={CircleImg} className="w-5 h-5 z-10"/>
          <p className="text-sm text-violet-600 font-medium z-10">New: AI-Powered Tools Available</p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">Supercharge Your<br/>Digital Workflow</h1>
        <p className="text-xs sm:text-sm md:text-sm leading-normal text-gray-700 mb-4">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>

        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mt-2">
          <button className="bg-violet-600 text-white px-4 py-2 rounded-3xl hover:bg-black transition text-sm md:text-base">
            Explore Products
          </button>

          <button className="bg-white border border-violet-600 text-violet-600 px-4 py-2 rounded-3xl hover:bg-black hover:text-white transition flex items-center justify-center gap-2 text-sm md:text-base">
            <img src={PlayImg} className="h-4 w-4"/> Watch Demo
          </button>
        </div>
      </div>

      <div className="flex flex-col md:w-1/2 mt-6 md:mt-0 items-center">
        <img src={BannerImg} className="w-full md:w-auto max-w-md"/>
      </div>
    </div>
  );
};

export default Banner;