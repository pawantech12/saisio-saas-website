import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full max-md:px-5">
          {" "}
          <small className="text-2xl font-medium text-primary">Sign Up</small>
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem]">
            Create new account & join Our community today
          </h3>
        </div>
        <div className="my-16">
          <form
            action=""
            className="mx-auto max-w-[600px] w-full flex flex-col gap-6 items-center px-5"
          >
            <h4 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem] max-sm:text-center">
              Create New Account
            </h4>
            <input
              type="text"
              className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
              placeholder="Username"
            />
            <input
              type="email"
              className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
              placeholder="Password"
            />
            <input
              type="password"
              className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg w-full"
              placeholder="Confirm Password"
            />
            <div className="flex gap-2">
              <input type="checkbox" className="w-5 h-5 mt-1" />
              <p className="text-xl">
                By creating account, I agree to this website's{" "}
                <Link className="text-primary">privacy policy</Link>
                and <Link className="text-primary">terms of service</Link>
              </p>
            </div>
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
              Create Account
            </button>

            <p className="text-xl text-neutral-800 font-medium">
              Already have an account?{" "}
              <Link
                className="text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200  ms-2 "
                to={`/login`}
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
