import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change background color when scrolled
      setIsScrolled(currentScrollY > 0);

      // Hide navbar on scroll down and show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="px-24 py-5 flex items-center justify-between">
        <div>
          <Link>
            <img src="./images/logo.png" alt="Logo Image" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-10 text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-primary font-medium text-neutral-700 transition-colors ease-in-out duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary font-medium text-neutral-700 transition-colors ease-in-out duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-primary font-medium text-neutral-700 transition-colors ease-in-out duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary font-medium text-neutral-700 transition-colors ease-in-out duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Link className="hover:text-primary font-medium text-neutral-700 transition-colors ease-in-out duration-200 text-lg">
            Sign In
          </Link>
          <button
            className="
          border border-title 
          bg-primary 
          shadow-[3px_3px_0_0] 
          shadow-title 
          text-white 
          text-center 
          rounded-md 
          px-6 py-3 
          font-semibold 
          text-lg 
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
    </header>
  );
};

export default Navbar;
