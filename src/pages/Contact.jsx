import React from "react";

const Contact = () => {
  return (
    <>
      <section className="py-20">
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full">
          {" "}
          <small className="text-2xl font-medium text-primary">
            Contact Us
          </small>
          <h3 className="text-[52px] font-semibold text-neutral-800 ">
            Want to visit us? Use the address below
          </h3>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-5 px-24">
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title px-8 py-10">
            <div className="space-y-3">
              <figure>
                <img
                  src="./images/location.svg"
                  alt="location svg image"
                  className="w-16"
                />
              </figure>
              <h4 className="text-2xl font-medium text-neutral-800">
                Somewhereville
              </h4>
              <p className="text-xl text-zinc-600">
                456 main street, California, United States
              </p>
            </div>
            <hr className="h-[1px] border-none bg-title my-4" />
            <div>
              <span className="text-xl text-zinc-600">(555) 987-6543</span>
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
          mt-10
        
        "
              >
                View Location
              </button>
            </div>
          </div>
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title px-8 py-10">
            <div className="space-y-3">
              <figure>
                <img
                  src="./images/location.svg"
                  alt="location svg image"
                  className="w-16"
                />
              </figure>
              <h4 className="text-2xl font-medium text-neutral-800">
                Somewhereville
              </h4>
              <p className="text-xl text-zinc-600">
                456 main street, California, United States
              </p>
            </div>
            <hr className="h-[1px] border-none bg-title my-4" />
            <div>
              <span className="text-xl text-zinc-600">(555) 987-6543</span>
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
          mt-10
        
        "
              >
                View Location
              </button>
            </div>
          </div>
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title px-8 py-10">
            <div className="space-y-3">
              <figure>
                <img
                  src="./images/location.svg"
                  alt="location svg image"
                  className="w-16"
                />
              </figure>
              <h4 className="text-2xl font-medium text-neutral-800">
                Somewhereville
              </h4>
              <p className="text-xl text-zinc-600">
                456 main street, California, United States
              </p>
            </div>
            <hr className="h-[1px] border-none bg-title my-4" />
            <div>
              <span className="text-xl text-zinc-600">(555) 987-6543</span>
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
          mt-10
        
        "
              >
                View Location
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="px-24 py-20">
        <div className="text-center ">
          {" "}
          <h3 className="text-[52px] font-semibold text-neutral-800 ">
            Have something in your mind? Let us know your thought
          </h3>
        </div>
        <div className="mt-10">
          <form
            action=""
            className="mx-auto max-w-[1000px] w-full flex flex-col gap-5 items-center"
          >
            <div className="flex items-center gap-5 w-full">
              <input
                type="text"
                className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
                placeholder="Last Name"
              />
            </div>
            <div className="flex items-center gap-5 w-full">
              <input
                type="email"
                className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
                placeholder="Subject"
              />
            </div>
            <textarea
              cols="30"
              rows="5"
              className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title  px-6 py-7 text-lg w-full resize-none "
              placeholder="Message"
            ></textarea>
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
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
