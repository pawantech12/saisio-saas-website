import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full w-full">
          {" "}
          <small className="text-2xl font-medium text-primary">
            News & Articles
          </small>
          <h3 className="text-[52px] font-semibold text-neutral-800 ">
            Browse our latest articles & news
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-14 px-24">
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
         w-fit mt-10
        "
        >
          Next
        </button>
      </section>
      <section className="py-20 px-24">
        <div className="py-8 px-10 border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title">
          <div>
            <h4 className="text-2xl  font-medium text-primary text-center">
              Featured Author
            </h4>
          </div>
          <div className="mt-8 flex items-center gap-7">
            <figure className="bg-purple-100 w-1/2 p-5 rounded-xl">
              <img
                src="./images/man.jpg"
                alt="man image"
                className="rounded-xl"
              />
            </figure>
            <div className="w-1/2 space-y-4">
              <h4>
                <Link className="text-neutral-800 text-2xl font-semibold hover:text-primary transition-colors ease-in-out duration-200">
                  Colin Mathieu
                </Link>
              </h4>
              <p className="text-xl text-zinc-600">
                Peering into the numbers, we unveil the hidden stories they
                tell. In the world of finance, every data point is a
                brushstroke, painting a picture of market trends and investment
                possibilities.
              </p>
              <button
                className="
          border border-title 
          bg-white 
          shadow-[3px_3px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-[30px] py-[15px]
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
                <Link> Read More</Link>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-14">
            {[1, 2, 3].map((item, index) => {
              return (
                <div
                  className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title"
                  key={item}
                >
                  <figure className="overflow-hidden rounded-t-xl">
                    <img
                      src={`./images/blog${item}.jpg`}
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
        </div>
      </section>
    </>
  );
};

export default BlogList;
