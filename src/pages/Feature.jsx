import React, { useState, useEffect } from "react";
import AnalyticSection from "../components/AnalyticSection";
import FeatureSection from "../components/FeatureSection";
import CtaSection from "../components/CtaSection";

const steps = [
  {
    id: 1,
    title: "Improved Efficiency",
    description:
      "Our app can automate the data collection and analysis process, reducing time and effort required to derive insights.",
    image: "/images/benefit1.png",
  },
  {
    id: 2,
    title: "Cost Savings",
    description:
      "Save significant operational costs by streamlining processes and automating repetitive tasks.",
    image: "/images/benefit2.png",
  },
  {
    id: 3,
    title: "Risk Management",
    description:
      "Identify potential risks early with our real-time data insights and smart alerts.",
    image: "/images/benefit3.png",
  },
  {
    id: 4,
    title: "Data Visualization",
    description:
      "Easily understand trends and insights through intuitive charts and graphs.",
    image: "/images/benefit4.png",
  },
];

const Feature = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Smooth step change based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight;

      // Calculate the active step based on a fraction of the scroll position
      const newStep = Math.min(
        steps.length,
        Math.max(1, Math.floor(scrollY / (sectionHeight / steps.length)) + 1) // This makes steps change more frequently
      );

      console.log("Active Step:", newStep); // Debug log to ensure the step is changing properly

      setActiveStep(newStep);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [scrollDirection, setScrollDirection] = useState(null); // "up" or "down"

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down"); // Scrolling downward
      } else if (window.scrollY < lastScrollY) {
        setScrollDirection("up"); // Scrolling upward
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full">
          {" "}
          <small className="text-2xl font-medium text-primary">Features </small>
          <h3 className="text-[52px] font-semibold text-neutral-800 ">
            Increase your workflow with our analysis gem
          </h3>
        </div>
        <div className="sticky w-full h-screen top-0 bg-white my-20">
          {/* Left - Step Progress and Content */}
          <div className=" w-full  h-full flex justify-between items-center gap-5  px-24">
            {/* Steps Progress */}
            <div className="space-y-6 w-1/2">
              <h4 className="text-neutral-800 font-semibold text-5xl leading-[3.6rem]">
                Key benefits of using our analysis app
              </h4>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex ${
                      step.id === activeStep ? "items-start" : "items-center"
                    } group transition-all duration-500 gap-8`}
                  >
                    {/* Step Circle */}
                    <div
                      className={`px-4 py-[6px] flex items-center justify-center rounded-full border-2 text-xl ${
                        step.id === activeStep
                          ? "bg-purple-600 border-purple-600 text-white"
                          : "border-gray-300 text-gray-400"
                      } transition-all`}
                    >
                      {step.id}
                    </div>

                    {/* Step Content */}
                    <div
                      className={`transition-opacity ${
                        step.id === activeStep
                          ? "opacity-100 text-neutral-800"
                          : "opacity-60 text-gray-600"
                      } ease-in-out duration-200`}
                    >
                      <h3 className="text-3xl font-medium">{step.title}</h3>
                      {step.id === activeStep && (
                        <p className="mt-2 text-xl text-neutral-700 transition-all ease-in-out duration-200">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right - Dynamic Image */}
            <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center overflow-hidden">
              {steps.map((step) => (
                <img
                  key={step.id} // This will ensure React knows to re-render the image based on step changes
                  src={step.image}
                  alt={step.title}
                  className={`absolute w-1/2 h-auto object-contain transition-all duration-700 ease-in-out ${
                    step.id === activeStep
                      ? "opacity-100 scale-100 z-10" // Active image
                      : "opacity-0 scale-95 z-0" // Inactive images
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <AnalyticSection />
      <section className="px-24 py-20">
        {/* Heading and Description */}
        <div className="space-y-5 w-3/4">
          <h4 className="text-neutral-800 font-semibold text-5xl leading-[3.6rem]">
            Our data processing is secured and safe. Know the reason
          </h4>
          <p className="text-xl text-zinc-600">
            Securing a business analytics app is crucial to protect sensitive
            information. Here are the reason behind our super secured data
            processing:
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Card 1 */}
          <div className="relative">
            <div className="flex relative z-10">
              {/* secured1 Image */}
              <img
                src="images/secured1.png"
                alt="secured image 1"
                className={`w-80 ml-10 transition-transform duration-500 ${
                  scrollDirection === "down"
                    ? "translate-y-[-30px]"
                    : scrollDirection === "up"
                    ? "translate-y-[30px]"
                    : ""
                }`}
              />
              {/* secured2 Image */}
              <img
                src="images/secured2.png"
                alt="secured image 2"
                className={`w-56 h-fit self-end absolute right-20 bottom-0 transition-transform duration-500 ${
                  scrollDirection === "down"
                    ? "translate-y-[30px]"
                    : scrollDirection === "up"
                    ? "translate-y-[-30px]"
                    : ""
                }`}
              />
            </div>
            <div className="p-8 pt-32 bg-primary text-white rounded-lg flex flex-col items-start shadow-lg -mt-24">
              <h3 className="text-4xl font-semibold mb-3">
                Compliance with Data Protection Regulations
              </h3>
              <p className="text-lg text-white opacity-90">
                Compliance from relevant data protection regulations such as
                GDPR or CCPA, ensures the security or safety of your valuable
                data.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <div className="flex relative z-10">
              {/* secured3 Image */}
              <img
                src="images/secured3.png"
                alt="secured image 3"
                className={`w-80 ml-10 transition-transform duration-500 ${
                  scrollDirection === "down"
                    ? "translate-y-[-30px]"
                    : scrollDirection === "up"
                    ? "translate-y-[30px]"
                    : ""
                }`}
              />
              {/* secured4 Image */}
              <img
                src="images/secured4.png"
                alt="secured image 4"
                className={`w-56 h-fit self-end absolute right-20 bottom-0 transition-transform duration-500 ${
                  scrollDirection === "down"
                    ? "translate-y-[30px]"
                    : scrollDirection === "up"
                    ? "translate-y-[-30px]"
                    : ""
                }`}
              />
            </div>
            <div className="p-8 pt-32 bg-[#042f47] text-white rounded-lg flex flex-col items-start shadow-lg -mt-24">
              <h3 className="text-4xl font-semibold mb-3">
                Regular Security Audits and Testing
              </h3>
              <p className="text-lg text-white opacity-90">
                Our inbuilt system conducts security audits and penetration
                tests on a regular basis to identify vulnerabilities and
                weaknesses.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeatureSection />
      <CtaSection />
    </>
  );
};

export default Feature;
