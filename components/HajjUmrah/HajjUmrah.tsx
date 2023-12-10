"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

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

const hajjItems = [
  {
    title: "Umrah Packages",
    desc: (
      <div>
        <p className="text-medium pt-8 text-[20px] text-neutral-600">
          Begin your Umrah journey with our tailored packages. We offer diverse
          options, from economy to premium, ensuring a seamless and enriching
          pilgrimage for individuals and families.
        </p>

        <p className="text-medium pt-8 text-[20px] text-neutral-600">
          Our packages include accommodations, transportation, and guided tours
          for a worry-free spiritual experience.
        </p>
      </div>
    ),
  },
  {
    title: "Hajj Packages",
    desc: (
      <div>
        <p className="text-medium pt-8 text-[20px] text-neutral-600">
          Experience the significance of Hajj with our meticulously crafted
          packages. We handle the details, so you can focus on your spiritual
          journey.
        </p>
        <p className="text-medium pt-8 text-[20px] text-neutral-600">
          Our offerings include expert guidance, luxury accommodations, and more
          for a fulfilling pilgrimage.
        </p>
      </div>
    ),
  },
  {
    title: "Customized Packages",
    desc: (
      <div>
        <p className="text-medium pt-8 text-[20px] text-neutral-600">
          Personalize your Hajj or Umrah journey with our custom packages. Our
          dedicated team will collaborate with you to create a pilgrimage that
          aligns with your needs, be it special accommodations, unique travel
          arrangements, or specific tour inclusions.
        </p>
      </div>
    ),
  },
];
export const hajjImages = [
  {
    src: "/images/hajj/kaaba.jpg",
  },
  {
    src: "/images/hajj/nabawi.avif",
  },
];

const HajjUmrah = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 10);
  }, []);
  return (
    <>
      <Breadcrumb pageName="Hajj and Umrah" />
      <section className="py-8 md:py-12">
        <div className="w-full">
          <div className="m-auto flex w-[97.5%] flex-wrap items-center md:w-[85%]">
            <div className=" lg:w-1/2">
              <Slider
                {...sliderSettings}
                className=" w-full rounded-sm md:px-2 "
              >
                {hajjImages.map((item) => (
                  <div
                    key={item.src}
                    className="wow fadeInUp relative mx-auto mb-8 aspect-[5/3] text-center lg:m-0"
                    data-wow-delay=".15s"
                  >
                    <Image
                      src={item.src}
                      alt="about image"
                      fill
                      className=" rounded-lg drop-shadow-three "
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[670px]" data-wow-delay=".2s">
                {domLoaded && (
                  <Slider
                    {...sliderSettings}
                    className=" w-full rounded-sm md:px-8 "
                  >
                    {hajjItems.map((item) => (
                      <div className="pt-8" key={item.title}>
                        <h3 className=" text-left  text-[40px] font-bold text-black dark:text-white sm:text-2xl lg:text-[40px] xl:text-[40px]">
                          <span className="text-green-primary">
                            {item.title.split(" ")[0]}
                          </span>{" "}
                          {item.title.split(" ")[1]}
                        </h3>

                        {item.desc}
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HajjUmrah;
