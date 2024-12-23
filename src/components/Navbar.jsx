import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImg from "../../public/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="px-6 lg:px-24 py-5 flex items-center justify-between">
        <div>
          <Link>
            <img src={logoImg} alt="Logo Image" className="max-sm:w-28" />
          </Link>
        </div>
        <button
          className="lg:hidden text-2xl focus:outline-none transition-transform ease-in-out duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"} {/* Menu icon */}
        </button>
        <nav
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-500 ${
            isMenuOpen || "lg:max-h-none lg:opacity-100 lg:translate-y-0"
          } ${
            isMenuOpen
              ? "max-h-screen opacity-100 translate-y-0 border-t-4 border-primary"
              : "max-h-0 opacity-0 -translate-y-2"
          } overflow-hidden lg:overflow-visible`}
        >
          <ul className="flex flex-col lg:flex-row  gap-5 lg:gap-10 text-lg px-10 py-8 lg:p-0">
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
                to="/faq"
                className="hover:text-primary font-medium text-neutral-700 transition-colors ease-in-out duration-200"
              >
                FAQ
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

        <div className="hidden lg:flex items-center gap-5">
          <Link
            to={"/login"}
            className="hover:text-primary font-medium text-neutral-700 transition-colors ease-in-out duration-200 text-lg"
          >
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
