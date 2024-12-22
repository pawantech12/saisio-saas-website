import React from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Author = () => {
  return (
    <>
      <section>
        <div className=" bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full w-full text-center flex flex-col items-center gap-5 max-md:px-5">
          {" "}
          <figure className="w-56 h-56  max-md:w-40 max-md:h-40">
            <img
              src="./images/profile.jpg"
              alt="profile image"
              className="w-full h-full rounded-full"
            />
          </figure>
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-4xl">
            Colin Mathieu
          </h3>
          <p className="text-xl">
            Peering into the numbers, we unveil the hidden stories they tell. In
            the world of finance, every data point is a brushstroke, painting a
            picture of market trends and investment possibilities.
          </p>
          <ul className="mt-5 flex items-center gap-4">
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200 group flex items-center gap-3">
                <button
                  className="
          border border-title 
          bg-white 
          shadow-[2px_2px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-2 py-2
          font-semibold 
          text-sm 
          leading-6 
          transition-all 
          duration-300 
          group-hover:bg-primary
          group-hover:text-white 
          group-hover:shadow-none 
          group-hover:translate-x-1 group-hover:translate-y-1
        "
                >
                  <FaFacebookF />
                </button>
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200 group flex items-center gap-3">
                <button
                  className="
          border border-title 
          bg-white 
          shadow-[2px_2px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-2 py-2
          font-semibold 
          text-sm 
          leading-6 
          transition-all 
          duration-300 
          group-hover:bg-primary
          group-hover:text-white 
          group-hover:shadow-none 
          group-hover:translate-x-1 group-hover:translate-y-1
        "
                >
                  <FaDribbble />
                </button>
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200 group flex items-center gap-3">
                <button
                  className="
          border border-title 
          bg-white 
          shadow-[2px_2px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-2 py-2
          font-semibold 
          text-sm 
          leading-6 
          transition-all 
          duration-300 
          group-hover:bg-primary
          group-hover:text-white 
          group-hover:shadow-none 
          group-hover:translate-x-1 group-hover:translate-y-1
        "
                >
                  <FaPinterestP />
                </button>
              </Link>
            </li>

            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200 group flex items-center gap-3">
                <button
                  className="
          border border-title 
          bg-white 
          shadow-[2px_2px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-2 py-2
          font-semibold 
          text-sm 
          leading-6 
          transition-all 
          duration-300 
          group-hover:bg-primary
          group-hover:text-white 
          group-hover:shadow-none 
          group-hover:translate-x-1 group-hover:translate-y-1
        "
                >
                  <FaLinkedinIn />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="px-24 py-20 max-md:px-5">
        <div className="flex justify-between gap-5 items-center max-[500px]:flex-col">
          <h3 className="text-[52px] font-semibold text-neutral-800 w-1/2 leading-[3.7rem] max-md:text-[40px] max-md:leading-[3rem] max-md:w-4/5 max-[500px]:w-full max-[500px]:text-center">
            Blogs From the Author
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
        <div className="grid grid-cols-3 gap-5 mt-14 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <div
                className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title"
                key={item}
              >
                <figure className="overflow-hidden rounded-t-xl">
                  <img
                    src="./images/blog1.jpg"
                    className=" hover:scale-110 object-cover transition-transform ease-in-out duration-300 cursor-pointer"
                    alt="blog article image 1"
                  />
                </figure>
                <div className="px-8 py-7 space-y-5">
                  <div className="flex items-center justify-between gap-5">
                    <span className="px-4 py-[3px] bg-lighterPink text-zinc-700 hover:bg-zinc-600 hover:text-white rounded-full transition-colors ease-in-out duration-200 text-lg">
                      Integration
                    </span>
                    <span className="text-lg text-zinc-600">
                      September 9, 2023
                    </span>
                  </div>
                  <h4 className="text-3xl font-semibold text-neutral-800">
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
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Author;
