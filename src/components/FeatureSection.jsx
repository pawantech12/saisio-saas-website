const FeatureSection = () => {
  return (
    <section className="px-24 py-24 bg-lightPink max-md:px-5">
      <div className="text-center">
        <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem]">
          You will get best features to help your daily work
        </h3>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-5 max-md:grid-cols-2 max-[500px]:grid-cols-1">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-6 px-7 pt-7">
            <img
              src="./images/feature1.png"
              alt="feature 1"
              className="relative z-10"
            />
            <img src="./images/chat1.png" alt="chat image" />
            <div className="border border-title rounded-xl absolute -bottom-[10%] left-0 right-0 w-full h-full"></div>
          </div>
          <div className="mt-12 flex flex-col gap-[10px] text-center">
            <h4 className="text-[28px] font-semibold text-neutral-800">
              All-Time Contact
            </h4>
            <p className="text-zinc-500 text-xl">
              Analyzing your communication patterns over time has become easy
              with this feature.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-6 px-7 pt-7">
            <img
              src="./images/feature2.png"
              alt="feature 2"
              className="relative z-10"
            />
            <img
              src="./images/chatplaceholder.png"
              alt="chat placeholder image"
            />
            <div className="border border-title rounded-xl absolute -bottom-[10%] left-0 right-0 w-full h-full"></div>
          </div>
          <div className="mt-12 flex flex-col gap-[10px] text-center">
            <h4 className="text-[28px] font-semibold text-neutral-800">
              Daily Analytics
            </h4>
            <p className="text-zinc-500 text-xl">
              You can empower yourself with real-time data, and visualizations
              all in one app.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-6 px-7 pt-7">
            <img
              src="./images/feature3.png"
              alt="feature 3"
              className="relative z-10"
            />
            <img
              src="./images/chatplaceholder.png"
              alt="chat placeholder image"
            />
            <div className="border border-title rounded-xl absolute -bottom-[10%] left-0 right-0 w-full h-full"></div>
          </div>
          <div className="mt-12 flex flex-col gap-[10px] text-center">
            <h4 className="text-[28px] font-semibold text-neutral-800">
              Integrations
            </h4>
            <p className="text-zinc-500 text-xl">
              Streamline your analysis workflow by connecting with tools that
              are important.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-16 max-sm:flex-col">
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
          max-sm:w-full
        "
        >
          Get Started
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
          max-sm:w-full
        "
        >
          Browse all features
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
