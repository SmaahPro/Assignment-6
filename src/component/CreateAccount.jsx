import User from "../assets/user.png";
import Package from "../assets/package.png";
import Rocket from "../assets/rocket.png";

const steps = [
  {
    id: "01",
    img: User,
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started."
  },
  {
    id: "02",
    img: Package,
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs."
  },
  {
    id: "03",
    img: Rocket,
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately."
  }
];

const CreateAccount = () => {
  return (
    <div className="px-6 md:px-20 lg:px-50 py-12 md:py-20 bg-gray-50 font-[Martian_Mono]">

      <div className="text-center mb-10 md:mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">Get Started in 3 Steps</h2>
        <p className="text-xs md:text-sm text-gray-700">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white p-6 md:p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center gap-4 md:gap-5"
          >
            
            <div className="absolute top-4 right-4 bg-violet-600 text-white w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-[10px] md:text-xs font-bold">
              {step.id}
            </div>

            <div className="bg-violet-100 p-4 md:p-5 rounded-full">
              <img src={step.img} className="w-8 h-8 md:w-10 md:h-10 object-contain" alt={step.title}/>
            </div>

            <h3 className="text-base md:text-lg font-semibold">
              {step.title}
            </h3>

            <p className="text-gray-600 text-[10px] md:text-xs leading-normal">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateAccount;