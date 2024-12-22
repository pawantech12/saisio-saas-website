const TrackSection = () => {
  return (
    <section className="px-24 py-20 flex items-center justify-between h-screen gap-5 max-md:h-full max-md:px-5">
      <div className="w-1/2 space-y-10 max-lg:w-full">
        <h3 className="text-5xl font-semibold text-neutral-800 leading-[60px] max-md:text-[40px] max-md:leading-[48px]">
          We make it easy to track all users analytics.
        </h3>
        <p className="text-zinc-500 text-xl max-md:text-lg">
          Effortlessly track and analyze user behavior, giving you the insights
          you need to drive your business forward.
        </p>
        <ul className="space-y-8 max-lg:grid max-lg:grid-cols-2 max-lg:space-y-0 max-sm:grid-cols-1 max-lg:gap-3 max-sm:gap-8">
          <li className="flex gap-5 items-center max-lg:flex-col">
            <figure className="w-[15%] max-lg:w-full">
              <img src="./images/icon3.svg" alt="budget icon" />
            </figure>
            <div className="w-3/4 max-lg:w-full">
              <h4 className="text-neutral-800 text-[28px] font-medium">
                Track Progress & Work.
              </h4>
              <p className="text-zinc-500 text-xl ">
                Our intuitive dashboard provides a bird's-eye view of all your
                ongoing data analytics projects.
              </p>
            </div>
          </li>
          <li className="flex gap-5 items-center max-lg:flex-col">
            <figure className="w-[15%] max-lg:w-full">
              <img src="./images/icon4.svg" alt="cost management icon" />
            </figure>
            <div className="w-3/4 max-lg:w-full">
              <h4 className="text-neutral-800 text-[28px] font-medium">
                Visualize & Business Plan.
              </h4>
              <p className="text-zinc-500 text-xl ">
                Our app allows you to easily visualize data through charts,
                graphs, and interactive dashboards.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-1/2 relative h-full max-lg:hidden">
        <img
          src="./images/track2.png"
          alt="track 2"
          className="w-[45%] absolute top-0"
        />
        <img
          src="./images/track1.png"
          alt="track 1"
          className="w-[45%] absolute right-0 top-[30%]"
        />
        <img
          src="./images/track3.png"
          alt="track 3"
          className="w-1/2 absolute bottom-[-10%]"
        />
        <img
          src="./images/direction2.svg"
          alt="reverse direction svg"
          className="absolute bottom-[-16%] right-0 w-1/3 animate-updown"
        />
      </div>
    </section>
  );
};

export default TrackSection;
