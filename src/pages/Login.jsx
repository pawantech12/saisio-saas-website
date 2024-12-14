import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full">
          {" "}
          <small className="text-2xl font-medium text-primary">Log In</small>
          <h3 className="text-[52px] font-semibold text-neutral-800 ">
            Enter your credentials to access your account
          </h3>
        </div>
        <div className="my-16">
          <form
            action=""
            className="mx-auto max-w-[600px] w-full flex flex-col gap-6 items-center"
          >
            <h4 className="text-[52px] font-semibold text-neutral-800 ">
              Log in
            </h4>

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
              Log In
            </button>
            <Link
              className=" hover:text-primary transition-colors ease-in-out duration-200 text-xl text-neutral-800 font-medium ms-2 "
              to={`/forgot-password`}
            >
              Forgotten Password?
            </Link>
            <p className="text-xl text-neutral-800 font-medium">
              Don't have an account?{" "}
              <Link
                className="text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200  ms-2 "
                to={`/sign-up`}
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
