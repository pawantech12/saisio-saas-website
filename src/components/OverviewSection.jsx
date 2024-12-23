const OverviewSection = () => {
  return (
    <section className="px-24 py-20 flex items-center justify-between max-lg:flex-col max-md:px-5">
      <div className="w-1/2 relative max-lg:w-full">
        <img src="./images/overview1.png" alt="overview 1" className="w-1/2" />
        <img
          src="./images/overview2.png"
          alt="overview 2"
          className="absolute bottom-[8%] right-[10%] w-1/2"
        />
        <img
          src="./images/overview3.png"
          alt="overview 3"
          className="absolute top-[-8%] right-[15%] w-1/3"
        />
        <img
          src="./images/direction.svg"
          alt="direction"
          className="w-1/3 animate-updown mt-5"
        />
      </div>
      <div className="w-1/2 space-y-10 max-lg:w-full">
        <h3 className="text-5xl font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem]">
          A big and simple financial overview.
        </h3>
        <p className="text-zinc-500 text-xl max-md:text-lg">
          Our Financial Overview is here to empower you with a clear and
          comprehensive picture of your financial situation.
        </p>
        <ul className="space-y-8 max-lg:grid max-lg:grid-cols-2 max-lg:space-y-0 max-sm:grid-cols-1 max-sm:gap-4">
          <li className="flex gap-5 max-lg:flex-col">
            <figure className="w-[15%]">
              <img src="./images/icon1.svg" alt="budget icon" />
            </figure>
            <div className="w-3/4 max-lg:w-full">
              <h4 className="text-neutral-800 text-[28px] font-medium">
                Budget management.
              </h4>
              <p className="text-zinc-500 text-xl ">
                Create and manage budgets tailored to your needs. Avoid
                overspending and achieve your savings targets with ease.
              </p>
            </div>
          </li>
          <li className="flex gap-5 max-lg:flex-col">
            <figure className="w-[15%]">
              <img src="./images/icon2.svg" alt="cost management icon" />
            </figure>
            <div className="w-3/4 max-lg:w-full">
              <h4 className="text-neutral-800 text-[28px] font-medium">
                All cost management.
              </h4>
              <p className="text-zinc-500 text-xl ">
                Keep a detailed record of where your money is going and gain a
                clearer picture of your financial habits.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OverviewSection;
