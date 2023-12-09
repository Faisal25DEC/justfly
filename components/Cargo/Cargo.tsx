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
                  <h1 className="pb-4 text-center text-[36px] font-bold">
                    Best <span className="text-green-primary">Cargo</span>{" "}
                    Services
                  </h1>
                }
                paragraph={
                  <p className="font-medium">
                    In the realm of cargo and logistics, our unwavering
                    commitment to excellence stands as the cornerstone of our
                    distinction. Choosing us as your logistics partner ensures
                    an elevated experience marked by precision, global
                    connectivity, cutting-edge technology, tailored solutions,
                    sustainability, and a culture of continuous improvement. Our
                    dedication to setting industry standards reflects not just a
                    commitment but a guiding principle embedded in every facet
                    of our service, promising you a partnership that transcends
                    expectations
                  </p>
                }
                mb="44px"
              />
            </div>

            <div className=" lg:w-1/2">
              <Image
                src={"/images/brands/cargo.png"}
                width={700}
                height={150}
                alt="cargo image"
              />
            </div>
          </div>
          <h1 className="pb-[4rem] text-center text-[18px] font-medium ">
            Experience the epitome of{" "}
            <span className="text-[#229e43]">Cargo</span> excellence{" "}
          </h1>
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
