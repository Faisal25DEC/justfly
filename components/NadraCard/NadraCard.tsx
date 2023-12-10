import React from "react";
import { MdOutlineAddCard } from "react-icons/md";
import { SiNewrelic } from "react-icons/si";
import { GrDocumentUpdate } from "react-icons/gr";
import { GrDocumentUser } from "react-icons/gr";
import Breadcrumb from "../Common/Breadcrumb";

const NadraCard = () => {
  const cardData = [
    {
      icon: <MdOutlineAddCard className="h-8 w-8" />,
      id: 1,
      title: "New Card Application",
      paragraph:
        " Whether you're applying for a new Nadra card or replacing a lost or expired one, our team will guide you through the process, ensuring all requirements are met",
    },
    {
      icon: <SiNewrelic className="h-8 w-8" />,
      id: 2,
      title: "Renewals",
      paragraph:
        "Ensure your Nadra card remains valid with our efficient renewal services. We'll handle the paperwork and processing, so you don't have to worry about expiration.",
    },
    {
      icon: <GrDocumentUpdate className="h-8 w-8" />,
      id: 3,
      title: "Updates and Amendments",
      paragraph:
        "If your personal information has changed, we can assist in updating your Nadra card to reflect these changes accurately.",
    },
    {
      icon: <GrDocumentUser className="h-8 w-8" />,
      id: 4,
      title: "Documentation Assistance",
      paragraph:
        "Our experts will ensure you have all the necessary documents and information required for a successful Nadra card application or renewal.",
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Nadra Card Services" />
      <Breadcrumb pageName="Nadra Card Services" />
      <div className="m-auto flex w-[97.5%] flex-col items-center justify-between gap-8 md:w-[85%] md:flex-row">
        <div className="w-full text-center md:w-[50%] md:text-left">
          <h1 className="text-[40px] font-bold">
            <span className="text-green-primary">Nadra</span> Card Services
          </h1>
          <p className="pt-4 text-[20px] font-medium text-neutral-600 md:text-[22px]">
            Ensure your <span className="text-green-primary">Nadra</span> card
            is up-to-date and hassle-free with{" "}
            <span className="text-green-primary font-bold">
              Justfly Travels&apos;
            </span>{" "}
            specialized Nadra card services. We understand the importance of
            having a valid Nadra card, and we&apos;re here to assist you in
            completing the necessary paperwork efficiently and hassle-free.
          </p>
        </div>
        <div className=" w-[100%] md:w-[40%]">
          <img src="/images/nadra/card.png" alt="" className="w-full " />
        </div>
      </div>
      <div className="m-auto w-[97.5%]  py-8  md:w-[85%] ">
        <div className="grid grid-cols-1 place-items-center gap-y-4 md:grid-cols-2">
          {cardData.map((feature, idx) => {
            const { icon, paragraph, title } = feature;
            return (
              <div
                className={`flex max-w-[400px] flex-col items-center justify-center gap-4`}
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
                <p className="min-h-[7rem] text-center text-[16px] text-base font-light leading-relaxed text-body-color">
                  {paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NadraCard;
