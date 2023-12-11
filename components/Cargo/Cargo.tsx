"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import SectionTitle from "../../components/Common/SectionTitle";
import { Feature } from "@/types/feature";
import SingleFeature from "../../components/Features/SingleFeature";
import Image from "next/image";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiShip2Fill } from "react-icons/ri";
import { MdSafetyCheck } from "react-icons/md";
import { motion } from "framer-motion";
const variants = {
  initial: {
    x: 300,
    opacity: 0.9,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Cargo = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cargo"
        // description="We understand that unexpected events can occur during your travels, and your well-being is our utmost priority. In the unfortunate event of unexpected changes to your travel plans, we are here to guide you through the process of addressing these situations."
      />

      <section className="py-4 md:py-6">
        <div className="container">
          <div className=" mb-16 flex flex-wrap items-center justify-between md:mb-20 lg:mb-28">
            <div className="m-auto w-[97.5%] py-12 md:w-[85%] lg:w-1/2">
              <SectionTitle
                // center
                title={
                  <h1 className="pb-4 text-center text-[36px]  font-bold md:text-left">
                    Effortless{" "}
                    <span className="text-green-primary">
                      Parcel and Business Cargo
                    </span>{" "}
                    Services Worldwide
                  </h1>
                }
                paragraph={
                  <div>
                    <p className="text-center font-medium text-neutral-700 md:text-left">
                      Sending a parcel back home or managing your business cargo
                      has never been easier. At{" "}
                      <span className="text-green-primary font-bold ">
                        Justfly Travels
                      </span>
                      , we take pride in providing hassle-free solutions for
                      sending your love and care to your family and friends in
                      Pakistan and worldwide, all while offering competitive
                      rates that are often more favorable than other options. We
                      believe that staying connected with your loved ones or
                      managing your business shouldn&apos;t break the bank.
                    </p>
                    <p className="pt-4 text-center font-medium text-neutral-600 md:text-left">
                      <span className="cursor-pointer border-[1px] border-b-[#1b9d3d] pb-[1px] pr-1 text-[16px] font-bold text-[#1b9d3d]">
                        Contact us
                      </span>{" "}
                      today to learn more about our services and how{" "}
                      <span className="text-green-primary font-bold ">
                        Justfly Travels
                      </span>{" "}
                      can help you with dependable and cost-effective Cargo
                      solutions
                    </p>
                  </div>
                }
                mb="44px"
              />
            </div>

            <motion.div
              whileInView="animate"
              initial="initial"
              variants={variants}
              className=" lg:w-1/2"
            >
              <Image
                src={"/images/brands/cargo.png"}
                width={700}
                height={150}
                alt="cargo image"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4  md:flex-row md:justify-evenly">
            {featuresData.map((feature, idx) => {
              const { icon, paragraph, title } = feature;
              return (
                <div
                  className={`flex w-full flex-col items-center justify-center gap-4`}
                  key={title}
                >
                  {icon && (
                    <div className="flex items-center justify-center ">
                      <div className=" flex h-[57.5px] w-[70px] items-center justify-center rounded-[2rem] bg-primary bg-opacity-10 text-primary">
                        {icon}
                      </div>
                    </div>
                  )}
                  <h3 className=" text-xl font-bold text-black dark:text-white sm:text-lg lg:text-lg xl:text-2xl">
                    {title}
                  </h3>
                  <p className="text-center text-[16px] text-base font-light leading-relaxed text-body-color">
                    {paragraph}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const featuresData: Feature[] = [
  {
    icon: <RiShip2Fill className="h-8 w-8" />,
    id: 1,
    title: "Reliable transportation",
    paragraph:
      "Cargo transportation solutions, ensuring timely and pristine delivery",
  },
  {
    icon: <RiTeamLine className="h-8 w-8" />,
    id: 2,
    title: "Experienced team",
    paragraph:
      "Professionals who understands the intricacies of cargo logistics",
  },
  {
    icon: <AiOutlineGlobal className="h-8 w-8" />,
    id: 3,
    title: "Global reach",
    paragraph: "Seamless cross-border and international shipments",
  },
  {
    icon: <MdSafetyCheck className="h-8 w-8" />,
    id: 4,
    title: " Secure Handling",
    paragraph: "Ensuring complete safety of your precious items",
  },
];

export default Cargo;
