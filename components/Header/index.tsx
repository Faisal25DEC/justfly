"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { RefObject, useEffect, useRef, useState } from "react";
import menuData from "./menuData";
import { BsPhone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [currentSection, setCurrentSection] = useState("#home");

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  const [smc, setSmc] = useState(false);

  useEffect(() => {
    // Function to update smc based on window.innerWidth
    const updateSmc = () => {
      setSmc(window.innerWidth <= 1240);
    };
    updateSmc();

    window.addEventListener("resize", updateSmc);

    return () => {
      window.removeEventListener("resize", updateSmc);
    };
  }, []);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => {
    const sectionIds = [
      "home",
      ,
      "hajj-umrah",
      "cargo",
      "injury-claims",
      "nadra-services",
      "money-transfer",
      "footer",
    ];

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          setCurrentSection("#" + entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  console.log(currentSection);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  console.log(navbarOpen);

  return (
    <>
      <header
        className={`${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition "
            : "absolute bg-transparent"
        } top-0 z-[40] h-[max-content] w-[100%] bg-transparent py-4`}
      >
        <div className="mdc:w-[85%] m-auto flex w-[92.5%] items-center justify-between">
          <div className="flex items-center justify-between gap-[1px] ">
            <img
              src="/images/logo/logo.png"
              alt=""
              className="h-[4rem] w-[5rem]"
            />
            <img
              src="/images/logo/logo2.png"
              alt=""
              className="h-[4.5rem] w-[6rem]"
            />
          </div>

          <div
            className={`mdc:static mdc:h-auto mdc:flex-row mdc:items-center mdc:bg-transparent mdc:p-0 mdc:rounded-[0] fixed right-[4%] top-[10vh] flex h-[max-content] flex-col gap-[1.25rem] rounded-xl bg-white p-4 ${
              smc && `${navbarOpen ? "flex" : "hidden"}  transition-custom`
            }`}
          >
            {menuData.map((item) => {
              return (
                <a
                  className={`text-[16px] font-medium hover:text-[#1b9d3d] ${
                    currentSection === item.path &&
                    "text-green-primary border-b-[1px] border-b-[#1b9d3d]"
                  } ${
                    item.path === "#footer" &&
                    "text-green-primary mdc:hidden block"
                  }`}
                  key={item.title}
                  href={item.path}
                  onClick={() => {
                    setCurrentSection(item.path);
                    window.location.href = item.path;
                  }}
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <div className="transition-custom text-green-primary mdc:flex hidden cursor-pointer items-center gap-[4px] font-semibold">
            <BsPhone className="h-4 w-4" /> <a>0161 459 4752</a>
          </div>
          <div
            className="mdc:hidden block cursor-pointer"
            onClick={() => {
              setNavbarOpen((prev) => !prev);
            }}
          >
            {navbarOpen ? (
              <IoMdClose className="ransition-custom h-6 w-6" />
            ) : (
              <GiHamburgerMenu className="ransition-custom h-6 w-6" />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
