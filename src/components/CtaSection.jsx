import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="px-24 py-20 max-md:px-5">
      <div className="mx-auto max-w-[1290px] w-full border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title bg-primary px-20 flex gap-5 justify-between items-center relative max-lg:flex-col max-sm:px-5">
        <div className="w-2/3 space-y-6 py-5 max-lg:w-full max-lg:text-center">
          <h4 className="text-[52px] font-semibold text-white leading-[3.8rem] max-lg:text-[40px] max-lg:leading-[3rem]">
            Ready to get started? Create an account today
          </h4>
          <button
            className="
          border border-title 
          bg-white 
          shadow-[3px_3px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-[37px] py-[15px]
          font-semibold 
          text-xl 
          leading-6 
          transition-all 
          duration-300 
          hover:bg-title
          hover:text-white 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
        "
          >
            <Link to={"/pricing"}>Get Started</Link>
          </button>
        </div>
        <div className="pt-10 w-1/2 max-lg:w-full">
          <img
            src="./images/cta.png"
            alt="cta png"
            className="w-96 max-lg:w-11/12"
          />
        </div>
        <img
          src="./images/dots.png"
          alt="dots image"
          className="absolute right-0 left-0 bottom-0 mx-auto "
        />
      </div>
    </section>
  );
};

export default CtaSection;
