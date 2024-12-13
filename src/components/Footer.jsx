import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="">
      <div className="px-24 py-20 bg-lightPink flex justify-between">
        <div className="flex flex-col gap-7">
          <figure>
            <img src="./images/logo.png" alt="logo image" />
          </figure>
          <p className="text-xl text-neutral-800 leading-[1.6rem]">
            4965 Graystone Lakes, Milledgevi <br /> +00 123 456 789
          </p>
          <form className="flex flex-col gap-6">
            <h4 className="text-2xl font-medium text-neutral-800">
              Subscribe to newsletter
            </h4>
            <input
              type="text"
              className="border border-title rounded-md shadow-[4px_4px_0_0] shadow-title h-11 px-6 py-7 text-lg "
              placeholder="Enter your email address"
            />
            <button
              className="
          border border-title 
          bg-primary 
          shadow-[2px_2px_0_0] 
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
          w-fit
        "
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className="text-2xl font-medium text-neutral-800">Menu</h4>
          <ul className="mt-7 flex flex-col gap-4">
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Integration
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-medium text-neutral-800">
            Utility Pages
          </h4>
          <ul className="mt-7 flex flex-col gap-4">
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Create Account
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Forgot Password
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                404 Not Found
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Password Protected
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Licenses
              </Link>
            </li>
            <li>
              <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200">
                Changelog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-medium text-neutral-800">Contact Us</h4>
          <ul className="mt-7 flex flex-col gap-4">
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
                Facebook
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
                Dribbble
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
                Pinterest
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
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-5">
        <p className="text-xl text-zinc-600">
          Copyright © | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
