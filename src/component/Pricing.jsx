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
    
    <div className="py-20 px-50 bg-gray-50 font-[Martian_Mono]">

      <div className="text-center mb-14">

        <h2 className="text-4xl font-bold mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {plans.map((plan) => (
          <div
            key=
            {plan.name}
            className={`relative p-8 rounded-2xl shadow flex flex-col gap-5 transition

            ${plan.popular
              ? "bg-gradient-to-br from-blue-500 to-violet-600 text-white scale-105"
              : "bg-white"
            }`}>

            {/* Most popular badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-orange-700 text-xs px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}

            {/* Plan name */}
            <h3 className="text-xl font-bold">
              {plan.name}
            </h3>

            {/* Small description */}
            <p className="text-xs opacity-80">
              {plan.desc}
            </p>

            {/* Price */}
            <div className="text-4xl font-bold">
              {plan.price}
              <span className="text-sm font-normal">/month </span>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-2">
              {plan.features.map((item , index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-xs">
                  ✔
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              className={`mt-4 py-2 rounded-xl text-xs font-semibold transition
              ${plan.popular
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-violet-600 text-white hover:bg-violet-700"
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