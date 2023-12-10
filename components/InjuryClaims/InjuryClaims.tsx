"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from "next";
import Image from "next/image";
import SingleFeature from "../../components/Features/SingleFeature";
import SectionTitle from "../../components/Common/SectionTitle";
import supportPic from "../../public/images/support.jpg";
import { BsArrowRight } from "react-icons/bs";

const InjuryAndClaims = () => {
  const sliderSettings = {
    className: "center",
    centerMode: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    speed: 500,
    slide: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Breadcrumb pageName="Injury claims" />

      <section className="py-4 md:py-8 ">
        <div className="container">
          <div className="border-b border-body-color/[.15] dark:border-white/[.15] ">
            <div className="-mx-4 flex flex-wrap items-center">
              <Slider
                {...sliderSettings}
                className="  w-[100%] rounded-sm md:w-[50%] md:px-8"
              >
                {injuryAndClaimDesc.map((item, idx) => {
                  const { title, desc } = item;
                  return (
                    <div
                      key={idx}
                      className="w-full px-4 py-12 md:px-12 lg:w-1/2"
                    >
                      <SectionTitle title={title} paragraph={desc} mb="44px" />
                    </div>
                  );
                })}
              </Slider>

              <div className="w-full max-w-[700px] px-4 lg:w-1/2">
                <Image
                  src={"/images/safety/safety.png"}
                  width={500}
                  height={200}
                  alt="safety"
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 py-4 md:grid-cols-2 md:py-8 lg:grid-cols-3 lg:py-12">
            {featuresData.map((feature, idx) => (
              <SingleFeature key={idx} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InjuryAndClaims;

const injuryAndClaimDesc = [
  {
    title: (
      <h1 className="pb-4 text-left text-[36px] font-bold">
        <span className="text-green-primary">Expert</span> Injury Claims
        Services
      </h1>
    ),
    desc: (
      <p className="text-left">
        Accidents can happen when you least expect them, whether it&apos;s at
        the workplace or on the road. When you find yourself injured due to
        circumstances beyond your control, seeking compensation and justice is
        essential. At{" "}
        <span className="text-green-primary">Justfly Travels</span>, we&apos;re
        here to assist you with our expert Injury Claims services.
        <div className="flex items-center gap-2 pt-4">
          <h1 className="text-[30px]">
            We{" "}
            <span className="text-green-primary font-semibold">Specialize</span>{" "}
            in{" "}
          </h1>
          <div>
            <BsArrowRight color="#1b9d3d" className="h-8 w-8 font-bold" />
          </div>
        </div>
      </p>
    ),
  },
  {
    title: (
      <h1 className="pb-4 text-left text-[36px] font-bold">
        <span className="text-green-primary">Car Accidents</span>(Not Your
        Fault)
      </h1>
    ),
    desc: (
      <p className="text-left text-[22px] font-medium">
        Car accidents can be traumatic, especially when they&apos;re not your
        fault. We&apos;re here to provide you with the support and guidance you
        need to file an injury claim and recover the damages you&apos;re
        entitled to.
      </p>
    ),
  },
  {
    title: (
      <h1 className="pb-4 text-left text-[36px] font-bold">
        <span className="text-green-primary">Workplace Accidents</span>
      </h1>
    ),
    desc: (
      <p className="text-left text-[22px] font-medium">
        We understand the physical, emotional, and financial toll that workplace
        accidents can take, and we&apos;re dedicated to ensuring you receive the
        compensation you deserve.
      </p>
    ),
  },
];

const featuresData = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/support.svg"
        alt="cargo image"
        width={40}
        height={40}
      />
    ),
    title: "Reporting an Incident",
    paragraph:
      "In case of unexpected incidents while traveling, contact our 24/7 support at +01258925. Swift communication enables efficient assistance, ensuring your safety and minimizing disruptions to your travel experience.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/refund.svg"
        alt="cargo image"
        width={40}
        height={40}
      />
    ),
    title: "Trip Modifications and Refunds",
    paragraph:
      "For unexpected travel changes like cancellations or alterations, our team is ready to assist. We'll work to find alternatives or help with refunds. Keep us informed for seamless support during your journey.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/claims.svg"
        alt="cargo image"
        width={40}
        height={40}
      />
    ),
    title: "Filing a Claim",
    paragraph:
      "For a travel-related claim, our simple process ensures ease. Contact our support team, and they'll guide you through the necessary steps and documentation to initiate your claim efficiently.",
  },
];
