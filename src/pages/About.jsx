import React from "react";
import OverviewSection from "../components/OverviewSection";
import CtaSection from "../components/CtaSection";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full max-md:px-5">
          {" "}
          <small className="text-2xl font-medium text-primary">About Us</small>
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem]">
            Transforming raw data into informed choices
          </h3>
        </div>

        <div className="mx-auto p-6 gap-10 grid grid-cols-2 auto-rows-auto my-10 px-24 max-lg:px-5 max-md:grid-cols-1">
          <div>
            <figure className="border border-title rounded-lg shadow-[4px_4px_0_0] shadow-title">
              <img
                src="images/about1.jpg"
                alt="about image 1"
                className="rounded-lg"
              />
            </figure>
            <div className="mt-8 space-y-8">
              <p className="text-xl text-neutral-700">
                Our commitment to excellence drives us to create intuitive and
                powerful data analysis tools that cater to the unique needs of
                your business. Whether you're a startup looking to make your
                mark or an established enterprise seeking to stay ahead, we
                provide the insights and solutions you need to succeed.
              </p>
              <div className="flex items-center gap-7 max-[500px]:flex-col">
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
          text-lg
          leading-6 
          transition-all 
          duration-300 
          hover:bg-title 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
          max-[500px]:w-full
        "
                >
                  Start Free Trial
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
          text-lg 
          leading-6 
          transition-all 
          duration-300 
          hover:bg-primary
          hover:text-white 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
          max-[500px]:w-full
        "
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="border border-title rounded-lg shadow-[4px_4px_0_0] shadow-title">
            <img
              src="images/about2.jpg"
              alt="about 2 image"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-24 py-24 bg-lightPink max-md:px-5">
        <div>
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem]">
            You will get best features to help your daily work
          </h3>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex flex-col gap-5 border border-title rounded-lg shadow-[4px_4px_0_0] shadow-title h-fit p-7 py-10 bg-white">
            <div className=" flex justify-center">
              <img
                src="images/featureicon1.svg"
                alt="feature icon 1"
                className="w-24"
              />
            </div>
            <div className=" flex flex-col gap-[10px] text-center">
              <h4 className="text-[28px] font-semibold text-neutral-800">
                All-Time Contact
              </h4>
              <p className="text-zinc-500 text-xl">
                Analyzing your communication patterns over time has become easy
                with this feature.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 border border-title rounded-lg shadow-[4px_4px_0_0] shadow-title h-fit p-7 py-10 bg-white">
            <div className=" flex justify-center">
              <img
                src="images/featureicon2.svg"
                alt="feature icon 2"
                className="w-24"
              />
            </div>
            <div className=" flex flex-col gap-[10px] text-center">
              <h4 className="text-[28px] font-semibold text-neutral-800">
                Daily Analytics
              </h4>
              <p className="text-zinc-500 text-xl">
                You can empower yourself with real-time data, and visualizations
                all in one app.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 border border-title rounded-lg shadow-[4px_4px_0_0] shadow-title h-fit p-7 py-10 bg-white">
            <div className=" flex justify-center">
              <img
                src="images/featureicon3.svg"
                alt="feature icon 3"
                className="w-24"
              />
            </div>
            <div className=" flex flex-col gap-[10px] text-center">
              <h4 className="text-[28px] font-semibold text-neutral-800">
                Integrations
              </h4>
              <p className="text-zinc-500 text-xl">
                Streamline your analysis workflow by connecting with popular
                tools that are important
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-16">
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
        "
          >
            <Link to={"/feature"}>All Features</Link>
          </button>
        </div>
      </section>
      <OverviewSection />
      <CtaSection />
    </>
  );
};

export default About;
