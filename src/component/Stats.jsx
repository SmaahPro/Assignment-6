const Stats = () => {
  return (
    <div className="bg-blue-700 text-white py-8 md:py-15 font-[Martian_Mono]">

      <div className="max-w-5xl mx-auto flex flex-row justify-around items-center gap-2 md:gap-6 text-center px-2">
        
        <div>
          <p className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4">50k+</p>
          <p className="text-[10px] sm:text-xs md:text-sm">Active Users</p>
        </div>

        <div className="border-l border-white h-8 md:h-14"></div>

        <div>
          <p className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4">200+</p>
          <p className="text-[10px] sm:text-xs md:text-sm">Premium Tools</p>
        </div>

        <div className="border-l border-white h-8 md:h-14"></div>

        <div>
          <p className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-4">4.9</p>
          <p className="text-[10px] sm:text-xs md:text-sm">Rating</p>
        </div>
        
      </div>
    </div>
  );
};

export default Stats;