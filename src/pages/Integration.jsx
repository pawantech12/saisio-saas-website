import { Link } from "react-router-dom";

const Integration = () => {
  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full max-md:px-5">
          {" "}
          <small className="text-2xl font-medium text-primary">
            Integrations
          </small>
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px]">
            Connect popular apps that are important to you
          </h3>
        </div>
        <div className="my-16 grid grid-cols-3 gap-5  px-24 max-lg:px-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title">
            <div className="p-10 flex items-center gap-4 bg-lightPink rounded-xl">
              <figure className="border border-title rounded-full w-[85px] h-[85px] shadow-[4px_4px_0_0] shadow-title flex items-center justify-center">
                <img src="./images/loom.svg" alt="Loom image" />
              </figure>
              <div>
                <h4 className="text-[28px]">Loom</h4>
                <span className="text-zinc-600 hover:text-primary transition-colors ease-in-out duration-200">
                  Communication
                </span>
              </div>
            </div>
            <hr className="h-[1px] border-none bg-title" />
            <div className="px-10 py-7  space-y-7">
              <p className="text-xl text-zinc-600">
                Loom is a video messaging and screen recording platform with
                sharing feature.
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
                <Link to={"/single-integration"}>Get Started</Link>
              </button>
            </div>
          </div>
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title">
            <div className="p-10 flex items-center gap-4 bg-lightPink rounded-xl">
              <figure className="border border-title rounded-full w-[85px] h-[85px] shadow-[4px_4px_0_0] shadow-title flex items-center justify-center">
                <img src="./images/hubspot.svg" alt="hubspot image" />
              </figure>
              <div>
                <h4 className="text-[28px]">Hubspot</h4>
                <span className="text-zinc-600 hover:text-primary transition-colors ease-in-out duration-200">
                  CRM
                </span>
              </div>
            </div>
            <hr className="h-[1px] border-none bg-title" />
            <div className="px-10 py-7  space-y-7">
              <p className="text-xl text-zinc-600">
                HubSpot is a widely recognized CRM and inbound marketing
                software platform.
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
                <Link to={"/single-integration"}>Get Started</Link>
              </button>
            </div>
          </div>
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title">
            <div className="p-10 flex items-center gap-4 bg-lightPink rounded-xl">
              <figure className="border border-title rounded-full w-[85px] h-[85px] shadow-[4px_4px_0_0] shadow-title flex items-center justify-center">
                <img src="./images/shopify.svg" alt="shopify image" />
              </figure>
              <div>
                <h4 className="text-[28px]">Shopify</h4>
                <span className="text-zinc-600 hover:text-primary transition-colors ease-in-out duration-200">
                  Ecommerce
                </span>
              </div>
            </div>
            <hr className="h-[1px] border-none bg-title" />
            <div className="px-10 py-7  space-y-7">
              <p className="text-xl text-zinc-600">
                Shopify is a popular e-commerce platform that enables businesses
                to create and manage online stores.
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
                <Link to={"/single-integration"}>Get Started</Link>
              </button>
            </div>
          </div>
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
                <Link to={"/single-integration"}>Get Started</Link>
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
                <Link to={"/single-integration"}>Get Started</Link>
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
                <Link to={"/single-integration"}>Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
