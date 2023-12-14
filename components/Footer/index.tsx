"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className=" wow fadeInUp section-bg   pt-16 dark:bg-gray-dark  md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="m-auto w-[97.5%] md:w-[85%]">
          <div className="flex flex-col flex-wrap items-start md:flex-row md:items-start">
            <div className="w-full md:w-1/2  lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 flex items-center gap-2">
                  <img
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="h-[4rem] w-[5rem] "
                  />
                  <img
                    src="/images/logo/logo2.png"
                    alt="logo"
                    className="h-[4rem] w-[6rem] "
                  />
                </Link>
                <div className="flex flex-col gap-4 pl-4">
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    Call Us At:{" "}
                    <span className="text-[#229e43]">0161 459 4752</span>
                  </p>
                  <p className="text-green-primary font-medium">
                    <span className="text-body-color">Email: </span>{" "}
                    infojustflytavel@gmail.com
                  </p>
                  <p className="font-medium text-body-color">
                    150 Heywood St, Bury BL9 7DY
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/blogs"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      TOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Open Support Ticket
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start gap-4 py-4 pl-4 md:flex-row md:items-center  md:justify-between md:gap-0 md:pl-0">
            <p className="text-base text-body-color dark:text-white">
              Ⓒ 2023 Justfly All Rights Reserved
            </p>
            <div className="flex flex-col items-start justify-start gap-4 py-4 text-body-color md:flex-row md:items-center md:py-0">
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
