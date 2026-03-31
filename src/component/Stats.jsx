const Stats = () => {
  return (
    <div className="bg-blue-700 text-white py-15 font-[Martian_Mono]">
      <div className="max-w-5xl mx-auto flex flex-row justify-around items-center gap-6 text-center">
        <div>
          <p className="text-4xl font-bold mb-4">50k+</p>
          <p className="text-sm">Active Users</p>
        </div>

        <div className="hidden md:block border-l border-white h-14"></div>

        <div>
          <p className="text-4xl font-bold mb-4">200+</p>
          <p className="text-sm">Premium Tools</p>
        </div>

        <div className="hidden md:block border-l border-white h-14"></div>

        <div>
          <p className="text-4xl font-bold mb-4">4.9</p>
          <p className="text-sm">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;