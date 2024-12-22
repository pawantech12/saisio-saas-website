import React from "react";

const ArticleSection = () => {
  return (
    <section className="px-24 py-24 max-md:px-5 ">
      <div className="flex justify-between gap-5 items-center max-sm:flex-col">
        <h3 className="text-[52px] font-semibold text-neutral-800 w-1/2 leading-[3.7rem] max-md:text-[40px] max-md:leading-[3rem] max-md:w-4/5 max-sm:text-center max-sm:w-full">
          Take a look at our latest blog and articles.
        </h3>
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
          h-fit
        "
        >
          More Articles
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-14 max-lg:grid-cols-1">
        <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title">
          <figure className="overflow-hidden rounded-t-xl">
            <img
              src="./images/blog1.jpg"
              className=" hover:scale-110 object-cover transition-transform ease-in-out duration-300 cursor-pointer"
              alt="blog article image 1"
            />
          </figure>
          <div className="px-10 py-7 space-y-5 max-md:px-5">
            <div className="flex items-center justify-between gap-5">
              <span className="px-4 py-[3px] bg-lighterPink text-zinc-700 hover:bg-zinc-600 hover:text-white rounded-full transition-colors ease-in-out duration-200 text-lg">
                Integration
              </span>
              <span className="text-lg text-zinc-600">September 9, 2023</span>
            </div>
            <h4 className="text-3xl font-semibold text-neutral-800 max-md:text-2xl">
              Cybersecurity in Finance: Protecting Your Assets
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
          hover:bg-primary
          hover:text-white 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
          h-fit
        "
            >
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title flex max-sm:flex-col">
            <figure className="overflow-hidden sm:rounded-s-xl w-1/2 h-full max-sm:w-full  max-sm:rounded-t-xl ">
              <img
                src="./images/blog2.jpg"
                className=" hover:scale-110 w-full h-full object-cover transition-transform ease-in-out duration-300 cursor-pointer"
                alt="blog article image 2"
              />
            </figure>
            <div className="px-5 py-8 space-y-5 w-1/2 max-sm:w-full">
              <div className="flex items-center justify-between gap-5 flex-wrap">
                <span className="px-4 py-[3px] bg-lighterPink text-zinc-700 hover:bg-zinc-600 hover:text-white rounded-full transition-colors ease-in-out duration-200 text-lg">
                  Software
                </span>
                <span className="text-lg text-zinc-600">September 9, 2023</span>
              </div>
              <h4 className="text-2xl font-semibold text-neutral-800">
                The Power of Predictive Analytics in Financial Planning
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
          hover:bg-primary
          hover:text-white 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
          h-fit
        "
              >
                Read More
              </button>
            </div>
          </div>
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title flex max-sm:flex-col">
            <figure className="overflow-hidden sm:rounded-s-xl max-sm:rounded-t-xl w-1/2 h-full max-sm:w-full">
              <img
                src="./images/blog3.jpg"
                className=" hover:scale-110 w-full h-full object-cover transition-transform ease-in-out duration-300 cursor-pointer"
                alt="blog article image 3"
              />
            </figure>
            <div className="px-5 py-8 space-y-5 w-1/2 max-sm:w-full">
              <div className="flex items-center justify-between gap-5 flex-wrap">
                <span className="px-4 py-[3px] bg-lighterPink text-zinc-700 hover:bg-zinc-600 hover:text-white rounded-full transition-colors ease-in-out duration-200 text-lg">
                  Bussiness{" "}
                </span>
                <span className="text-lg text-zinc-600">September 9, 2023</span>
              </div>
              <h4 className="text-2xl font-semibold text-neutral-800">
                Maximizing Profits Through Data-Driven Insights
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
          hover:bg-primary
          hover:text-white 
          hover:shadow-none 
          hover:translate-x-1 hover:translate-y-1
          h-fit
        "
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
