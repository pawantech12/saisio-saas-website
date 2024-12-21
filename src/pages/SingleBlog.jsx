import React from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <section>
        <div className="text-center bg-[url('/images/bgimg.jpg')] bg-cover px-24 py-28 rounded-br-full">
          {" "}
          <div className="flex items-center justify-center gap-5">
            <span className="px-4 py-[3px] bg-lighterPink text-zinc-700 hover:bg-zinc-600 hover:text-white rounded-full transition-colors ease-in-out duration-200 text-lg">
              Integration
            </span>
            <span className="text-lg text-zinc-600">September 9, 2023</span>
          </div>
          <h3 className="text-[52px] font-semibold text-neutral-800 ">
            Exploring Data Privacy and Security in Business Analysis Apps
          </h3>
        </div>
        <div className="px-24 ">
          <figure className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title w-full">
            <img
              src="./images/blog1.jpg"
              alt="blog 1 image"
              className="w-full object-cover rounded-xl"
            />
          </figure>
          <div className="space-y-10 mt-12">
            <p className="text-xl text-zinc-700">
              In today's data-driven business landscape, organizations rely
              heavily on business analysis applications to extract valuable
              insights, make informed decisions, and drive growth. However, the
              increasing use of such applications raises concerns about data
              privacy and security. This blog post delves into the crucial
              aspects of maintaining data privacy and security when utilizing
              business analysis apps.
            </p>
            <h3 className="text-5xl font-semibold text-neutral-800">
              Data Encryption and Storage:
            </h3>
            <p className="text-xl text-zinc-700">
              ‍Business analysis applications handle vast amounts of sensitive
              data, including financial records, customer information, and
              market trends. Employing robust encryption techniques ensures that
              data is protected both during transmission and storage. Utilizing
              strong encryption protocols like AES (Advanced Encryption
              Standard) and HTTPS can significantly mitigate the risk of
              unauthorized access.
            </p>
            <h4 className="text-3xl font-medium text-neutral-800">
              Access Control and Authentication:
            </h4>
            <p className="text-xl text-zinc-700">
              ‍Implementing strict access controls and multi-factor
              authentication mechanisms is vital. Role-based access ensures that
              only authorized personnel can access specific data sets or
              features within the application. Multi-factor authentication adds
              an extra layer of security by requiring users to provide multiple
              forms of verification before gaining access.
            </p>
            <h4 className="text-3xl font-medium text-neutral-800">
              Regular Security Audits:
            </h4>
            <p className="text-xl text-zinc-700">
              ‍Conducting routine security audits helps identify vulnerabilities
              and potential loopholes in the application. Regular assessments by
              cybersecurity experts can pinpoint weaknesses that could be
              exploited by malicious actors. Addressing these vulnerabilities
              promptly enhances the overall security posture of the application.
            </p>
            <h4 className="text-3xl font-medium text-neutral-800">
              Data Minimization and Retention Policies:
            </h4>
            <p className="text-xl text-zinc-700">
              ‍Adhering to data minimization principles involves collecting only
              the necessary data required for analysis, reducing the risk of
              exposure. Additionally, implementing data retention policies
              ensures that data is stored only for the required duration and is
              securely deleted afterward. This minimizes the potential impact of
              a data breach.
            </p>

            <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title p-10 bg-primary">
              <p className="text-2xl text-white text-center rounded-xl ">
                ‍If your business analysis application is provided by a
                third-party vendor, it's essential to assess their security
                practices. Review their data handling policies, encryption
                methods, and compliance with industry regulations (such as GDPR
                or HIPAA). Ensure that their security standards align with your
                organization's requirements.
              </p>
            </div>
            <h4 className="text-3xl font-medium text-neutral-800">
              User Training and Awareness:
            </h4>
            <p className="text-xl text-zinc-700">
              ‍Often, data breaches occur due to human error. Providing
              comprehensive training to users about data privacy best practices,
              recognizing phishing attempts, and understanding security
              protocols can significantly reduce the risk of unintentional
              breaches.
            </p>
            <h4 className="text-3xl font-medium text-neutral-800">
              Conclusion:
            </h4>
            <p className="text-xl text-zinc-700">
              In the age of data-driven decision-making, maintaining data
              privacy and security within business analysis applications is
              paramount. By implementing robust encryption, access controls,
              regular security audits, and user education, organizations can
              mitigate risks and ensure that sensitive information remains
              protected. As businesses continue to rely on these applications,
              prioritizing data security will be crucial for building trust with
              customers and stakeholders alike.
            </p>
          </div>
          <div className="border border-title rounded-xl shadow-[4px_4px_0_0] shadow-title my-10 px-10 py-10 flex items-center gap-8 bg-lightPink">
            <figure className="w-1/5">
              <img
                src="./images/profile.jpg"
                alt="profile image"
                className="w-full h-full rounded-full border border-title"
              />
            </figure>
            <div className="w-9/12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-800 ">
                    Colin Mathieu
                  </h3>
                  <span className="text-xl text-primary">Blog Author</span>
                </div>
                <ul className="flex items-center gap-4">
                  <li>
                    <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200 group flex items-center gap-3">
                      <button
                        className="
          border border-title 
          bg-white 
          shadow-[2px_2px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-2 py-2
          font-semibold 
          text-sm 
          leading-6 
          transition-all 
          duration-300 
          group-hover:bg-primary
          group-hover:text-white 
          group-hover:shadow-none 
          group-hover:translate-x-1 group-hover:translate-y-1
        "
                      >
                        <FaFacebookF />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200 group flex items-center gap-3">
                      <button
                        className="
          border border-title 
          bg-white 
          shadow-[2px_2px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-2 py-2
          font-semibold 
          text-sm 
          leading-6 
          transition-all 
          duration-300 
          group-hover:bg-primary
          group-hover:text-white 
          group-hover:shadow-none 
          group-hover:translate-x-1 group-hover:translate-y-1
        "
                      >
                        <FaDribbble />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200 group flex items-center gap-3">
                      <button
                        className="
          border border-title 
          bg-white 
          shadow-[2px_2px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-2 py-2
          font-semibold 
          text-sm 
          leading-6 
          transition-all 
          duration-300 
          group-hover:bg-primary
          group-hover:text-white 
          group-hover:shadow-none 
          group-hover:translate-x-1 group-hover:translate-y-1
        "
                      >
                        <FaPinterestP />
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link className="text-xl text-neutral-800 hover:text-primary transition-colors ease-in-out duration-200 group flex items-center gap-3">
                      <button
                        className="
          border border-title 
          bg-white 
          shadow-[2px_2px_0_0] 
          shadow-title 
          text-title 
          text-center 
          rounded-md 
          px-2 py-2
          font-semibold 
          text-sm 
          leading-6 
          transition-all 
          duration-300 
          group-hover:bg-primary
          group-hover:text-white 
          group-hover:shadow-none 
          group-hover:translate-x-1 group-hover:translate-y-1
        "
                      >
                        <FaLinkedinIn />
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="text-xl text-zinc-600 mt-4">
                Peering into the numbers, we unveil the hidden stories they
                tell. In the world of finance, every data point is a
                brushstroke, painting a picture of market trends and investment
                possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-24 my-20">
        <div className="flex justify-between gap-5 items-center">
          <h3 className="text-[52px] font-semibold text-neutral-800 w-1/2 leading-[3.7rem]">
            More post from similar category
          </h3>
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
            More Articles
          </button>
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
                    <Link to={"/single-blog"}>Get Started</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
