import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full">
          {" "}
          <small className="text-2xl font-medium text-primary">
            Forgot Password
          </small>
          <h3 className="text-[52px] font-semibold text-neutral-800 ">
            Forgot your password. Recover now
          </h3>
        </div>
        <div className="my-16">
          <form
            action=""
            className="mx-auto max-w-[600px] w-full flex flex-col gap-6 items-center"
          >
            <h4 className="text-[52px] font-semibold text-neutral-800 ">
              Recover Password
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
              Reset Password
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
