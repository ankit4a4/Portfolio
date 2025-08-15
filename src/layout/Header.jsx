import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpg";
import img from "../Assets/images/updatedCV.jpg";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import WelcomeIntro from "../layout/WelcomeIntro";
import ScrollToTopButton from "./ScrollToTopButton";
import { Link } from "lucide-react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showImage, setShowImage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (targetPosition) => {
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  const link = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "PROJECT", href: "#project" },
    { name: "SKILLS", href: "#skills" },
  ];

  const sendMessage = () => {
    const url = `https://wa.me/917251979740?text=${encodeURIComponent(
      "Hello Ankit..."
    )}`;
    window.open(url, "_blank");
  };

  const sendMessageToInstagram = () => {
    window.open("https://www.instagram.com/ankit___negi__07/", "_blank");
  };

  const sendMessageToLinkedin = () => {
    window.open("https://www.linkedin.com/in/ankit-singh-46a7062a6/", "_blank");
  };

  return (
    <>
      <WelcomeIntro />
      <ScrollToTopButton />

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 py-3 md:py-[1vw] px-6 md:px-[2vw]  flex items-center justify-between transition-all duration-500 backdrop-blur-sm
          ${scrollPosition > 10
            ? "bg-black bg-opacity-90 shadow-lg py-2"
            : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-[52px] w-[52px] md:h-[4vw] md:w-[4vw] rounded-full cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setShowImage(logo)}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 md:gap-[2.5vw] font-semibold text-white tracking-wide">
          {link.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) smoothScrollTo(target.offsetTop);
                }}
                className="hover:text-[#40E0D0] text-[2.5vh] md-text-[1.3vw] transition-colors duration-300"
              >
                {item.name}
              </a>
              {/* Underline Animation */}
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#40E0D0] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Icons + Button */}
        <div className="hidden md:flex gap-6 md:gap-[2vw] items-center">
          <span
            onClick={sendMessage}
            className="text-white text-[1.6rem] md:text-[2vw] cursor-pointer hover:text-[#25D366] transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </span>
          <span
            onClick={sendMessageToInstagram}
            className="text-white text-[1.6rem] md:text-[2vw] cursor-pointer hover:text-[#E1306C] transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </span>
          <span
            onClick={sendMessageToLinkedin}
            className="text-white text-[1.6rem] md:text-[2vw] cursor-pointer hover:text-[#0077B5] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <CiLinkedin />
          </span>

          <button
            onClick={() => setShowImage(img)}
            className="relative cursor-pointer inline-block px-6 py-2 md:py-[0.5vw] md:px-[1.5vw] border border-[#40E0D0] rounded-md font-medium text-white overflow-hidden group hover:text-black transition-colors duration-300 md:text-[1.3vw] "
          >
            <span className="absolute inset-0  bg-[#40E0D0] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out rounded-md z-[-1]"></span>
            View CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-50">
          {menuOpen ? (
            <HiX
              size={30}
              className="text-white cursor-pointer transition-transform duration-300 hover:rotate-90"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiMenuAlt3
              size={30}
              className="text-white cursor-pointer transition-transform duration-300 hover:rotate-90"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[70%] sm:w-[50%] h-screen bg-black text-white z-40 transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out backdrop-blur-md shadow-lg flex flex-col gap-10 py-28 px-8`}
      >
        {link.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className="text-[5vw] hover:text-[#40E0D0] font-semibold tracking-wide"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(item.href);
              if (target) {
                smoothScrollTo(target.offsetTop);
                setMenuOpen(false);
              }
            }}
          >
            {item.name}
          </a>
        ))}

        {/* Social Icons */}
        <div className="flex gap-8 mt-10 justify-start">
          <span
            className="text-[7vw] text-[#25D366] cursor-pointer"
            onClick={sendMessage}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </span>
          <span
            className="text-[7vw] text-[#E1306C] cursor-pointer"
            onClick={sendMessageToInstagram}
            aria-label="Instagram"
          >
            <FaInstagram />
          </span>
          <span
            className="text-[7vw] text-[#0077B5] cursor-pointer"
            onClick={sendMessageToLinkedin}
            aria-label="LinkedIn"
          >
            <CiLinkedin />
          </span>
        </div>

        {/* View CV button */}
        <button
          onClick={() => {
            setShowImage(img);
            setMenuOpen(false);
          }}
          className="mt-auto border border-[#40E0D0] py-3 rounded-md text-white font-semibold hover:bg-[#40E0D0] transition-colors duration-300"
        >
          View CV
        </button>
      </div>

      {/* View CV Modal */}
      {showImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4">
          <img
            src={showImage}
            alt="CV"
            className="max-h-[90vh] max-w-full object-contain rounded-md shadow-lg"
          />
          <button
            aria-label="Close CV"
            onClick={() => setShowImage("")}
            className="absolute top-5 right-5 md:top-[1vw]  md:right-[1vw] cursor-pointer text-red-500 text-4xl md:text-[3vw] font-bold hover:text-red-700 transition-colors duration-300"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
