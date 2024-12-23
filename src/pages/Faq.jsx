import { useState } from "react";
import accordionData from "../data/accordion.data";
import { FaMinus, FaPlus } from "react-icons/fa";
import TrackSection from "../components/TrackSection";
import CtaSection from "../components/CtaSection";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full max-md:px-5">
          {" "}
          <small className="text-2xl font-medium text-primary">FAQ </small>
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem]">
            Take a look at the frequently asked question.
          </h3>
        </div>
        <div className=" mx-auto  gap-5 grid grid-cols-2 auto-rows-auto my-10 px-24 max-lg:grid-cols-1 max-lg:px-5">
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
      <TrackSection />
      <CtaSection />
    </>
  );
};

export default Faq;
