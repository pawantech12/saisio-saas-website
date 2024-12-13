import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="px-24 py-20">
      <div className="mx-auto max-w-[1290px] w-full border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title bg-primary px-20 flex gap-5 justify-between items-center relative">
        <div className="w-2/3 space-y-6">
          <h4 className="text-[52px] font-semibold text-white leading-[3.8rem]">
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
        <div className="pt-10 w-1/2">
          <img src="./images/cta.png" alt="cta png" className="w-96" />
        </div>
        <img
          src="./images/dots.png"
          alt="dots image"
          className="absolute right-0 left-0 bottom-0 mx-auto"
        />
      </div>
    </section>
  );
};

export default CtaSection;
