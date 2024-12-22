import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between h-[120vh]  bg-[url('/images/bgimg.jpg')] bg-cover px-24 max-lg:flex-col max-lg:h-full max-lg:py-40 max-lg:gap-10 max-sm:px-5">
      <div className="flex flex-col gap-10 w-1/2 max-lg:w-full max-lg:items-center max-lg:text-center">
        <h1 className="font-semibold text-7xl max-lg:text-5xl max-md:text-[40px]">
          Take your real data analytics to your business.
        </h1>
        <p className="text-xl max-lg:text-lg text-zinc-700">
          Customer satisfaction is at the core of our business philosophy. We
          strive to build long-lasting relationships with our clients.
        </p>
        <div className="flex items-center gap-8 max-sm:flex-col">
          <button
            className="
          border border-title 
          bg-primary 
          shadow-[3px_3px_0_0] 
          shadow-title 
          text-white 
          text-center 
          rounded-md 
          px-6 py-3 
          font-semibold 
          text-lg 
          leading-6 
          transition-all 
          duration-300 
          hover:bg-title 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
        "
          >
            <Link to={"/contact"}>Start Free Trial</Link>
          </button>
          <div className="flex items-center gap-2">
            <img
              src="./images/active_users.png"
              alt="active users png"
              className="w-24"
            />
            <span className="text-neutral-700">9k+ Active Users</span>
          </div>
        </div>
      </div>
      <div className="w-2/5 max-lg:w-full">
        <img
          src="./images/hero.png"
          alt="hero section image"
          className="animate-updown"
        />
      </div>
    </section>
  );
};

export default HeroSection;
