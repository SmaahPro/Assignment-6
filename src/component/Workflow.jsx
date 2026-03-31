const Workflow = () => {
  return (
    <div className="py-20 px-50 bg-gradient-to-r from-blue-500 to-violet-600 font-[Martian_Mono] text-white">

      {/* Content wrapper */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold">
          Ready to Transform Your Workflow?
        </h2>

        {/* Paragraph */}
        <p className="text-xs leading-normal">
          Join thousands of professionals who are already using Digitools to work smarter.<br/>
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-2">

          <button className="text-sm bg-white text-blue-700 font-semibold px-6 py-2 rounded-3xl hover:bg-black hover:text-white transition">
            Explore Product
          </button>

          <button className="text-sm bg-transparent border border-white text-white font-semibold px-6 py-2 rounded-3xl hover:bg-black hover:text-white transition">
            View Pricing
          </button>

        </div>

        {/* Small note */}
        <p className="text-xs opacity-80 mt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

    </div>
  );
};

export default Workflow;