import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import CtaSection from "../components/CtaSection";
import accordionData from "../data/accordion.data";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-20">
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full max-md:px-5">
          {" "}
          <small className="text-2xl font-medium text-primary">Pricing</small>
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px]">
            Pricing that fits your needs
          </h3>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-5 px-24 max-lg:px-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {[1, 2, 3].map((item) => {
            return (
              <div
                className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title"
                key={item}
              >
                <div className="p-10 flex justify-between items-center gap-4 bg-lightPink rounded-xl">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl text-primary font-medium">
                      Starter
                    </h4>
                    <span className="text-3xl font-semibold text-neutral-800">
                      $ 29.00 USD
                    </span>
                    <small className="text-zinc-600 text-xl">Monthly</small>
                  </div>
                  <figure>
                    <img
                      src="./images/send.svg"
                      alt="send svg image"
                      className="w-12"
                    />
                  </figure>
                </div>
                <hr className="h-[1px] border-none bg-title" />
                <div className="px-10 py-7  space-y-5">
                  <ul className="space-y-5">
                    <li className="flex gap-2 items-center text-xl text-zinc-600">
                      <img
                        src="./images/tick2.svg"
                        alt="tick2 image"
                        className="w-6"
                      />
                      Website Analytics
                    </li>
                    <li className="flex gap-2 items-center text-xl text-zinc-600">
                      <img
                        src="./images/tick2.svg"
                        alt="tick2 image"
                        className="w-6"
                      />
                      1 Data Workspaces
                    </li>
                    <li className="flex gap-2 items-center text-xl text-zinc-600">
                      <img
                        src="./images/tick2.svg"
                        alt="tick2 image"
                        className="w-6"
                      />
                      1 User
                    </li>
                    <li className="flex gap-2 items-center text-xl text-zinc-600">
                      <img
                        src="./images/tick2.svg"
                        alt="tick2 image"
                        className="w-6"
                      />
                      Up to 1,000 Tracked Users
                    </li>
                    <li className="flex gap-2 items-center text-xl text-zinc-600">
                      <img
                        src="./images/tick2.svg"
                        alt="tick2 image"
                        className="w-6"
                      />
                      Custom Reports
                    </li>
                    <li className="flex gap-2 items-center text-xl text-zinc-600">
                      <img
                        src="./images/tick2.svg"
                        alt="tick2 image"
                        className="w-6"
                      />
                      Mobile App
                    </li>
                  </ul>
                  <button
                    className="
          border border-title 
          bg-primary 
          shadow-[3px_3px_0_0] 
          shadow-title 
          text-white 
          text-center 
          rounded-md 
          px-[37px] py-[15px] 
          font-semibold 
          text-xl 
          leading-6 
          transition-all 
          duration-300 
          hover:bg-title 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
          w-full mt-6
        "
                  >
                    <Link to={"/sign-up"}>Get Started</Link>
                  </button>
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
          hover:bg-primary
          hover:text-white 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
          w-full
        "
                  >
                    <Link to={"/feature"}>Browse all features</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-24 py-20 bg-lightPink max-lg:px-5">
        <div className="text-center space-y-5">
          {" "}
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px]">
            Frequently asked questions
          </h3>
          <p className="text-xl text-zinc-600">
            Take a look at our frequently asked question. If you can't find what
            you are looking for then feel free to{" "}
            <span className="text-primary">get in touch</span> with us
          </p>
        </div>
        <div className=" mx-auto p-6 gap-5 grid grid-cols-2 auto-rows-auto mt-10 max-lg:grid-cols-1 max-md:p-0">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border border-title rounded-lg shadow-[3px_3px_0_0] shadow-title bg-white h-fit px-8 py-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <h3
                  className={`text-2xl font-semibold transition-colors ease-in-out duration-200 ${
                    activeIndex === index ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {item.question}
                </h3>
                <span
                  className={` text-primary transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-[500px] mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-xl">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
};

export default Pricing;
