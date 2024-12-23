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
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full max-md:px-5">
          {" "}
          <small className="text-2xl font-medium text-primary">Features </small>
          <h3 className="text-[52px] font-semibold text-neutral-800 max-md:text-[40px] max-md:leading-[3rem]">
            Increase your workflow with our analysis gem
          </h3>
        </div>
      </section>
      <AnalyticSection />
      <section className="px-6 md:px-12 lg:px-24 py-10 md:py-16 lg:py-20">
        {/* Heading and Description */}
        <div className="space-y-5 w-full md:w-3/4 mx-auto text-center md:text-left">
          <h4 className="text-neutral-800 font-semibold text-5xl leading-tight md:leading-[3.6rem] max-md:text-[40px] max-md:leading-[3rem]">
            Our data processing is secured and safe. Know the reason
          </h4>
          <p className="text-base md:text-lg lg:text-xl text-zinc-600">
            Securing a business analytics app is crucial to protect sensitive
            information. Here are the reason behind our super secured data
            processing:
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-12">
          {/* Card 1 */}
          <div className="relative">
            <div className="flex relative z-10 justify-center md:justify-start">
              {/* secured1 Image */}
              <img
                src="images/secured1.png"
                alt="secured image 1"
                className={`w-64 md:w-80 ml-0 md:ml-10 transition-transform duration-500 ${
                  scrollDirection === "down"
                    ? "translate-y-[-20px]"
                    : scrollDirection === "up"
                    ? "translate-y-[20px]"
                    : ""
                }`}
              />
              {/* secured2 Image */}
              <img
                src="images/secured2.png"
                alt="secured image 2"
                className={`w-40 md:w-56 h-fit self-end absolute right-10 md:right-20 bottom-0 transition-transform duration-500 ${
                  scrollDirection === "down"
                    ? "translate-y-[20px]"
                    : scrollDirection === "up"
                    ? "translate-y-[-20px]"
                    : ""
                }`}
              />
            </div>
            <div className="p-6 md:p-8 pt-24 md:pt-32 bg-primary text-white rounded-lg flex flex-col items-start shadow-lg -mt-20 md:-mt-24">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
                Compliance with Data Protection Regulations
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-white opacity-90">
                Compliance from relevant data protection regulations such as
                GDPR or CCPA, ensures the security or safety of your valuable
                data.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <div className="flex relative z-10 justify-center md:justify-start">
              {/* secured3 Image */}
              <img
                src="images/secured3.png"
                alt="secured image 3"
                className={`w-64 md:w-80 ml-0 md:ml-10 transition-transform duration-500 ${
                  scrollDirection === "down"
                    ? "translate-y-[-20px]"
                    : scrollDirection === "up"
                    ? "translate-y-[20px]"
                    : ""
                }`}
              />
              {/* secured4 Image */}
              <img
                src="images/secured4.png"
                alt="secured image 4"
                className={`w-40 md:w-56 h-fit self-end absolute right-10 md:right-20 bottom-0 transition-transform duration-500 ${
                  scrollDirection === "down"
                    ? "translate-y-[20px]"
                    : scrollDirection === "up"
                    ? "translate-y-[-20px]"
                    : ""
                }`}
              />
            </div>
            <div className="p-6 md:p-8 pt-24 md:pt-32 bg-[#042f47] text-white rounded-lg flex flex-col items-start shadow-lg -mt-20 md:-mt-24">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
                Regular Security Audits and Testing
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-white opacity-90">
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
