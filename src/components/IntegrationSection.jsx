import { Link } from "react-router-dom";

const IntegrationSection = () => {
  return (
    <section className="px-24 py-24 max-md:px-5">
      <div className="text-center">
        <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem]">
          Integrated with all the tools you know and love
        </h3>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title">
          <div className="p-10 flex items-center gap-4 bg-lightPink rounded-xl">
            <figure className="border border-title rounded-full w-[85px] h-[85px] shadow-[4px_4px_0_0] shadow-title flex items-center justify-center">
              <img src="./images/trello.svg" alt="trello image" />
            </figure>
            <div>
              <h4 className="text-[28px]">Trello</h4>
              <span className="text-zinc-600 hover:text-primary transition-colors ease-in-out duration-200">
                Social Media
              </span>
            </div>
          </div>
          <hr className="h-[1px] border-none bg-title" />
          <div className="px-10 py-7  space-y-7">
            <p className="text-xl text-zinc-600">
              Trello uses a visual card-based system to help individuals and
              teams organize tasks and projects.
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
        "
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title">
          <div className="p-10 flex items-center gap-4 bg-lightPink rounded-xl">
            <figure className="border border-title rounded-full w-[85px] h-[85px] shadow-[4px_4px_0_0] shadow-title flex items-center justify-center">
              <img src="./images/figma.svg" alt="figma image" />
            </figure>
            <div>
              <h4 className="text-[28px]">Figma</h4>
              <span className="text-zinc-600 hover:text-primary transition-colors ease-in-out duration-200">
                Design Tool
              </span>
            </div>
          </div>
          <hr className="h-[1px] border-none bg-title" />
          <div className="px-10 py-7  space-y-7">
            <p className="text-xl text-zinc-600">
              Figma is a cloud-based design and prototyping tool known for its
              collaborative features.
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
        "
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title">
          <div className="p-10 flex items-center gap-4 bg-lightPink rounded-xl">
            <figure className="border border-title rounded-full w-[85px] h-[85px] shadow-[4px_4px_0_0] shadow-title flex items-center justify-center">
              <img src="./images/slack.svg" alt="slack image" />
            </figure>
            <div>
              <h4 className="text-[28px]">Slack</h4>
              <span className="text-zinc-600 hover:text-primary transition-colors ease-in-out duration-200">
                Communication
              </span>
            </div>
          </div>
          <hr className="h-[1px] border-none bg-title" />
          <div className="px-10 py-7  space-y-7">
            <p className="text-xl text-zinc-600">
              It is designed to facilitate teams to work together, share
              information, and streamline their workflows.
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
        "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-16">
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
        "
        >
          <Link to={"/integrations"}>Browse all integrations</Link>
        </button>
      </div>
    </section>
  );
};

export default IntegrationSection;
