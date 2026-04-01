const plans = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: "$0",
    button: "Get Started Free",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month"
    ],
    popular: false
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: "$29",
    button: "Start Pro Trial",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    button: "Contact Sales",
    price: "$99",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="py-12 md:py-20 px-6 md:px-20 lg:px-50 bg-gray-50 font-[Martian_Mono]">

      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 px-2">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 text-[10px] md:text-sm px-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8 items-center">

        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-6 md:p-8 rounded-2xl shadow flex flex-col gap-5 transition
            ${plan.popular
              ? "bg-gradient-to-br from-blue-500 to-violet-600 text-white scale-100 md:scale-105 z-10"
              : "bg-white"
            }`}>

            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-orange-700 text-[10px] md:text-xs px-4 py-1 rounded-full font-bold">
                Most Popular
              </div>
            )}

            <h3 className="text-lg md:text-xl font-bold">
              {plan.name}
            </h3>

            <p className="text-[10px] md:text-xs opacity-80">
              {plan.desc}
            </p>

            <div className="text-3xl md:text-4xl font-bold">
              {plan.price}
              <span className="text-xs md:text-sm font-normal">/month </span>
            </div>

            <div className="flex flex-col gap-2">
              {plan.features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[10px] md:text-xs">
                  <span>✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              className={`mt-4 py-2.5 md:py-2 rounded-xl text-[10px] md:text-xs font-semibold transition-all duration-300 cursor-pointer active:scale-95 z-20
              ${plan.popular
                ? "bg-white text-black hover:bg-gray-200 hover:shadow-lg"
                : "bg-violet-600 text-white hover:bg-violet-700 hover:shadow-lg"
              }`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;