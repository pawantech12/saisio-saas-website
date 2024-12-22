import { Link } from "react-router-dom";
import notFoundImg from "../../public/images/404.png";
const NotFound = () => {
  return (
    <section className="h-full  flex justify-center items-center max-md:h-screen">
      <div className="text-center space-y-3 my-24 max-md:px-5">
        <figure>
          <img src={notFoundImg} alt="404 not found image" />
        </figure>
        <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px]">
          Page Not Found
        </h3>
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
         w-fit
        "
        >
          <Link to={`/`}>Go Back to Home</Link>
        </button>
      </div>
    </section>
  );
};

export default NotFound;
