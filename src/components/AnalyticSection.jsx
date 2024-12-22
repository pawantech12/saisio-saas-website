import { useState } from "react";
import { Link } from "react-router-dom";

const AnalyticSection = () => {
  const [activeTab, setActiveTab] = useState("projectmanagement");
  return (
    <section className="px-24 py-24 bg-lightPink max-md:px-5">
      <div className="text-center">
        <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px]">
          Analytics & Reporting Breakdown Built for teams from 1 to 1k+
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="mx-auto mt-6 max-w-[1290px] w-full border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title bg-white px-[70px] py-[60px] flex flex-col items-center max-md:max-w-full max-md:p-5">
          {/* Tab Navigation */}
          <div className="flex gap-11 max-lg:gap-x-7 border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title px-20 w-fit flex-wrap gap-y-0 max-lg:py-2 max-lg:justify-center">
            {/* All Posts Tab */}
            <button
              className={`py-4 text-xl font-semibold transition-colors ease-in-out duration-200 max-lg:py-1 ${
                activeTab === "projectmanagement"
                  ? " text-primary"
                  : " text-title"
              }`}
              onClick={() => setActiveTab("projectmanagement")}
            >
              Project Management
            </button>

            {/* Saved Posts Tab */}
            <button
              className={`py-4 text-xl font-semibold transition-colors ease-in-out duration-200 max-lg:py-1 ${
                activeTab === "engineering" ? " text-primary" : " text-title"
              }`}
              onClick={() => setActiveTab("engineering")}
            >
              Engineering
            </button>
            <button
              className={`py-4 text-xl font-semibold transition-colors ease-in-out duration-200 max-lg:py-1 ${
                activeTab === "sales" ? " text-primary" : " text-title"
              }`}
              onClick={() => setActiveTab("sales")}
            >
              Sales
            </button>
            <button
              className={`py-4 text-xl font-semibold transition-colors ease-in-out duration-200 max-lg:py-1 ${
                activeTab === "marketing" ? " text-primary" : " text-title"
              }`}
              onClick={() => setActiveTab("marketing")}
            >
              Marketing
            </button>
          </div>

          {/* Content Area */}
          <div className="mt-6">
            {activeTab === "projectmanagement" && (
              // All Posts Section
              <div className="w-full flex items-center gap-10 mt-10 animate-fadeIn max-lg:flex-col">
                <div className="w-1/2 max-lg:w-full">
                  <figure>
                    <img
                      src="./images/analytic.png"
                      alt="project analytic image"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
                <div className="w-1/2 space-y-5 max-lg:w-full">
                  <h4 className="text-[40px] font-semibold max-md:text-2xl">
                    Project Management.
                  </h4>
                  <p className="text-xl text-zinc-500">
                    Business analytics apps can significantly enhance project
                    management by providing data-driven insights, real-time
                    monitoring, and collaboration tools.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-4">
                      <img
                        src="./images/tick.svg"
                        alt="check image"
                        className="w-5  "
                      />

                      <span className="text-lg text-zinc-600 w-full">
                        {" "}
                        Allows to create interactive charts, graphs, and
                        dashboards.
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <img
                        src="./images/tick.svg"
                        alt="check image"
                        className="w-5"
                      />
                      <span className="text-lg text-zinc-600">
                        {" "}
                        Allows to share insights, reports, and dashboards in
                        real-time.
                      </span>
                    </li>
                  </ul>
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
                    <Link to={"/pricing"}>Get Started</Link>
                  </button>
                </div>
              </div>
            )}
            {activeTab === "engineering" && (
              // All Posts Section
              <div className="w-full flex items-center gap-10 mt-10 animate-fadeIn max-lg:flex-col">
                <div className="w-1/2 max-lg:w-full">
                  <figure>
                    <img
                      src="./images/engineering.png"
                      alt="engineering image"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
                <div className="w-1/2 space-y-5 max-lg:w-full">
                  <h4 className="text-[40px] font-semibold max-md:text-2xl">
                    Engineering
                  </h4>
                  <p className="text-xl text-zinc-500">
                    By harnessing the power of data, production engineers can
                    improve efficiency, quality, and overall performance in
                    manufacturing operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-4">
                      <img
                        src="./images/tick.svg"
                        alt="check image"
                        className="w-5  "
                      />

                      <span className="text-lg text-zinc-600 w-full">
                        {" "}
                        Identifies quality issues in real-time by analyzing
                        data.
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <img
                        src="./images/tick.svg"
                        alt="check image"
                        className="w-5"
                      />
                      <span className="text-lg text-zinc-600">
                        {" "}
                        Create optimized production schedules based on resource
                        .
                      </span>
                    </li>
                  </ul>
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
                    <Link to={"/pricing"}>Get Started</Link>
                  </button>
                </div>
              </div>
            )}
            {activeTab === "sales" && (
              // All Posts Section
              <div className="w-full flex items-center gap-10 mt-10 animate-fadeIn max-lg:flex-col">
                <div className="w-1/2 max-lg:w-full">
                  <figure>
                    <img
                      src="./images/sales.png"
                      alt="sales image"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
                <div className="w-1/2 space-y-5 max-lg:w-full">
                  <h4 className="text-[40px] font-semibold max-md:text-2xl">
                    Sales
                  </h4>
                  <p className="text-xl text-zinc-500">
                    Plays a crucial role in generating sales by providing
                    valuable insights and data-driven strategies to improve
                    various aspects of the sales process.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-4">
                      <img
                        src="./images/tick.svg"
                        alt="check image"
                        className="w-5  "
                      />

                      <span className="text-lg text-zinc-600 w-full">
                        {" "}
                        Analyzes customer data based on behavior, and purchase.
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <img
                        src="./images/tick.svg"
                        alt="check image"
                        className="w-5"
                      />
                      <span className="text-lg text-zinc-600">
                        {" "}
                        Can track activities and measure performance of sales
                        team.
                      </span>
                    </li>
                  </ul>
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
                    <Link to={"/pricing"}>Get Started</Link>
                  </button>
                </div>
              </div>
            )}
            {activeTab === "marketing" && (
              // All Posts Section
              <div className="w-full flex items-center gap-10 mt-10 animate-fadeIn max-lg:flex-col">
                <div className="w-1/2 max-lg:w-full">
                  <figure>
                    <img
                      src="./images/marketing.png"
                      alt="marketing image"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
                <div className="w-1/2 space-y-5 max-lg:w-full">
                  <h4 className="text-[40px] font-semibold max-md:text-2xl">
                    Marketing
                  </h4>
                  <p className="text-xl text-zinc-500">
                    Empowers marketing teams with data-driven insights and tools
                    to enhance their decision-making processes, optimize
                    campaigns, and achieve better results.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-4">
                      <img
                        src="./images/tick.svg"
                        alt="check image"
                        className="w-5  "
                      />

                      <span className="text-lg text-zinc-600 w-full">
                        {" "}
                        Offers predictive modeling capabilities to forecast
                        future trends.
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <img
                        src="./images/tick.svg"
                        alt="check image"
                        className="w-5"
                      />
                      <span className="text-lg text-zinc-600">
                        {" "}
                        Calculates the return on investment for marketing
                        campaigns.
                      </span>
                    </li>
                  </ul>
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
                    <Link to={"/pricing"}>Get Started</Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticSection;
