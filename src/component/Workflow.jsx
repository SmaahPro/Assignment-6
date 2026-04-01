const Workflow = () => {
  return (
    <div className="py-16 md:py-20 px-6 md:px-20 lg:px-50 bg-gradient-to-r from-blue-500 to-violet-600 font-[Martian_Mono] text-white">

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">

        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          Ready to Transform Your Workflow?
        </h2>

        <p className="text-[10px] md:text-xs leading-normal opacity-90 px-2">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br className="hidden md:block"/> Start your free trial today.
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-3 md:gap-4 mt-2">

          <button className="text-xs md:text-sm bg-white text-blue-700 font-semibold px-5 md:px-6 py-2 rounded-3xl hover:bg-black hover:text-white transition active:scale-95">
            Explore Product
          </button>

          <button className="text-xs md:text-sm bg-transparent border border-white text-white font-semibold px-5 md:px-6 py-2 rounded-3xl hover:bg-black hover:text-white transition active:scale-95">
            View Pricing
          </button>

        </div>

        <p className="text-[9px] md:text-xs opacity-80 mt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default Workflow;