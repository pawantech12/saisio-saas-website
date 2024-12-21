import React from "react";
import { Link } from "react-router-dom";

const SingleIntegration = () => {
  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full">
          {" "}
          <small className="text-2xl font-medium text-primary">
            How to integrate
          </small>
          <h3 className="text-[52px] font-semibold text-neutral-800 ">
            Shopify
          </h3>
        </div>
      </section>
      <section className=" px-24 my-10">
        <div className="p-16 rounded-xl bg-lightPink flex items-center justify-between gap-5">
          <div className="w-1/2 space-y-6">
            <h4 className="text-5xl font-semibold text-neutral-800">
              Integrate Shopify with Saisio
            </h4>
            <p className="text-2xl ">
              Shopify is a popular e-commerce platform that enables businesses
              to create and manage online stores.
            </p>
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
         
        "
          >
            <Link to={"/pricing"}>Get Started</Link>
          </button>
        </div>
      </section>
      <section className=" px-24 my-10">
        <figure>
          <img src="./images/integrationdetail.jpg" alt="integration image" />
        </figure>
        <div className="mt-10 flex gap-5 relative">
          <div className="space-y-6  w-4/6">
            <h3 className="text-5xl font-semibold text-neutral-800">
              How to Integrate?
            </h3>
            <p className="text-xl">
              Integrating with Shopify you can analyze sales data, customer
              behavior, and other key metrics to make informed business
              decisions. Here's a general overview of the integration process:
            </p>
            <div className="space-y-5 text-xl text-neutral-800">
              <ol className="list-decimal ml-6 space-y-5">
                <li>
                  <span className="font-semibold">
                    Generate API Credentials:
                  </span>{" "}
                  Generate API credentials (API keys, tokens, etc.) from both
                  Shopify and our analytics app to establish a connection.
                </li>
                <li>
                  <span className="font-semibold">Shopify Integration:</span>{" "}
                  Our app has available connectors or plugins for Shopify. Use
                  them to connect Shopify.
                </li>
                <li>
                  <span className="font-semibold">
                    Data Mapping and Syncing:
                  </span>{" "}
                  Determine what data you want to track and analyze from
                  Shopify. This may include sales data, customer demographics,
                  product performance, and more. Map the data fields in Shopify
                  to the corresponding fields in our analytics app to ensure
                  seamless syncing.
                </li>
                <li>
                  <span className="font-semibold">
                    Automation and Scheduling:
                  </span>{" "}
                  Set up automated data syncing, and our analytics app will
                  regularly fetch updated data from Shopify.
                </li>
                <li>
                  <span className="font-semibold">
                    Data Analysis and Visualization:
                  </span>{" "}
                  Once your data is flowing into our analytics app, create
                  dashboards, reports, and visualizations to gain insights into
                  your e-commerce business. You can track key performance
                  indicators (KPIs), monitor sales trends, analyze customer
                  behavior, and more.
                </li>
                <li>
                  <span className="font-semibold">Monitor and Iterate:</span> As
                  your business evolves, you may need to adjust the integration,
                  add new data sources, or modify your analytics setup to meet
                  changing requirements.
                </li>
              </ol>
              <h4 className="text-3xl font-medium text-neutral-800">
                Here are some key details about Shopify:
              </h4>
              <ul className="list-disc ml-6 space-y-5">
                <li>
                  <span className="font-semibold">E-commerce Platform:</span>{" "}
                  Shopify provides a comprehensive platform for businesses of
                  all sizes to set up and operate online stores. It offers a
                  range of features and tools to facilitate e-commerce,
                  including website design, product management, payment
                  processing, and order fulfillment.
                </li>
                <li>
                  <span className="font-semibold">User-Friendly:</span> Shopify
                  is known for its user-friendly interface, making it accessible
                  to entrepreneurs and businesses without extensive technical
                  expertise. It offers customizable templates and themes to
                  design visually appealing online stores.
                </li>
                <li>
                  <span className="font-semibold">Hosting and Security:</span>{" "}
                  Shopify hosts online stores on its secure servers, eliminating
                  the need for users to manage hosting themselves. The platform
                  also includes SSL certificates to ensure secure transactions
                  and protect customer data.
                </li>
                <li>
                  <span className="font-semibold">App Store:</span> Shopify has
                  an extensive app store with thousands of apps and integrations
                  that allow users to add additional functionality to their
                  online stores. These apps cover areas such as marketing,
                  inventory management, analytics, and more.
                </li>
                <li>
                  <span className="font-semibold">Payment Processing:</span>{" "}
                  Shopify provides its own payment gateway, called Shopify
                  Payments, but also supports various third-party payment
                  processors like PayPal, Stripe, and more. This flexibility
                  allows businesses to choose the payment options that suit
                  their needs.
                </li>
                <li>
                  <span className="font-semibold">Multi-Channel Sales:</span>{" "}
                  Shopify allows businesses to sell products not only through
                  their online stores but also through various channels,
                  including social media platforms like Facebook and Instagram.
                  This multichannel approach helps reach a wider audience.
                </li>
                <li>
                  <span className="font-semibold">Mobile Commerce:</span>{" "}
                  Shopify offers mobile-responsive themes and a mobile app,
                  enabling businesses to manage their stores and track sales on
                  the go. This is crucial in today's mobile-driven e-commerce
                  landscape.
                </li>
                <li>
                  <span className="font-semibold">Scalability:</span> Shopify
                  can accommodate businesses at different stages of growth, from
                  small startups to large enterprises. Users can upgrade their
                  plans and access more features as their business expands.
                </li>
                <li>
                  <span className="font-semibold">24/7 Customer Support:</span>{" "}
                  Shopify provides customer support around the clock to assist
                  users with any issues or questions they may have.
                </li>
                <li>
                  <span className="font-semibold">Pricing:</span> Shopify offers
                  various pricing plans to cater to different budgets and needs,
                  including a 14-day free trial for users to explore the
                  platform before committing to a paid plan.
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-title  shadow-[4px_4px_0_0] shadow-title px-8 py-8 rounded-xl space-y-4 w-4/12 h-fit sticky top-12">
            <div>
              <h3 className="font-medium text-3xl text-neutral-800">
                Available on
              </h3>
              <p className="text-neutral-600 text-xl mt-3">
                Free, Professional, Teams, Enterprise
              </p>
            </div>
            <hr className="border-neutral-300 border-dashed border-[1px]" />
            <div>
              <h3 className="font-medium text-3xl text-neutral-800">
                Category
              </h3>
              <p className="text-neutral-600 text-xl mt-3">Ecommerce</p>
            </div>
            <hr className="border-neutral-300 border-dashed border-[1px]" />
            <div>
              <h3 className="font-medium text-3xl text-neutral-800">
                Requirements
              </h3>
              <p className="text-neutral-600 text-xl mt-3">
                Install our app on your device
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleIntegration;
