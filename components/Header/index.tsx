"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { RefObject, useEffect, useRef, useState } from "react";
import menuData from "./menuData";
import { BsPhone } from "react-icons/bs";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [currentSection, setCurrentSection] = useState("#home");

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
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

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center justify-between ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="w-full">
          <div className="relative m-auto  flex w-[97.5%] items-center justify-between md:w-[85%]">
            <div className="   max-w-full  xl:mr-12">
              <Link
                href="#home"
                className={`header-logo  flex w-full items-center gap-[1px] ${
                  sticky ? "py-4 lg:py-2" : "py-4"
                } `}
              >
                {domLoaded && (
                  <img
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="h-[3rem] w-[3rem] w-full pb-[3.5px] dark:hidden md:h-[5rem] md:w-[5rem]"
                  />
                )}
                {domLoaded && (
                  <img
                    src="/images/logo/logo2.png"
                    alt="logo"
                    className="h-12 w-[4.25rem] w-full  dark:block md:h-14 md:w-[5.25rem]"
                  />
                )}
              </Link>
            </div>
            <div className="flex w-[75%] items-center justify-between">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-[100%] lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block justify-end md:flex md:gap-[1rem]  ">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <a
                            onClick={() => {
                              window.location.href = menuItem.path;
                              setCurrentSection("#" + menuItem.path);
                            }}
                            className={`flex cursor-pointer py-2 text-[14px] text-base font-semibold lg:mr-0 lg:inline-flex lg:px-0 ${
                              sticky ? "lg:py-[2.1rem]" : "lg-py-2"
                            }  ${
                              currentSection === menuItem.path &&
                              "text-[#15a900]"
                            }  ${
                              currentSection === menuItem.path && "font-medium"
                            } ${
                              currentSection === menuItem.path &&
                              "border-b-[1px] border-[#15a900]"
                            } ${
                              menuItem.path === "#footer" &&
                              "text-green-primary"
                            } ${menuItem.path === "#footer" && "flex-grow"}`}
                          >
                            {menuItem.path === "#footer" ? (
                              <div className="flex items-center gap-[1px] md:pl-[125px]">
                                {" "}
                                <BsPhone className="h-4 w-4" /> {menuItem.title}
                              </div>
                            ) : (
                              menuItem.title
                            )}
                          </a>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <a
                                  key={index}
                                  className={`block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3 `}
                                >
                                  <p
                                    onClick={() => {
                                      console.log("clicke");
                                      window.location.href = submenuItem.path;
                                      setCurrentSection(submenuItem.title);
                                    }}
                                  >
                                    {" "}
                                    {submenuItem.title}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
