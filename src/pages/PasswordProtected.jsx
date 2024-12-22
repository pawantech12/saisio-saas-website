const PasswordProtected = () => {
  return (
    <section className="flex justify-center items-center py-10">
      <div className="w-1/3 space-y-4 max-md:w-full px-5">
        <figure className="flex justify-center">
          <img
            src="./images/passwordprotected.png"
            alt="password protected image"
            className="w-11/12"
          />
        </figure>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px]">
            Protected Page
          </h3>
          <form action="" className="space-y-5">
            <label
              htmlFor="password"
              className="text-xl font-semibold text-neutral-700"
            >
              Password
            </label>
            <input
              type="password"
              className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
              placeholder="Enter your Password"
            />
            <button
              className="s
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PasswordProtected;
