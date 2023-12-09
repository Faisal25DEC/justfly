"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import { useEffect, useState } from "react";

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
    desc: `Embark on the sacred journey of Umrah with our meticulously tailored packages, designed to cater to the unique needs of individuals and families. Choose from a diverse range of options, spanning economy, standard, and premium, ensuring a seamless and spiritually enriching experience for every pilgrim. Our packages encompass comfortable accommodations, convenient transportation, and guided tours to the holiest sites, providing you with a worry-free pilgrimage that allows you to focus entirely on your spiritual journey.`,
  },
  {
    title: "Hajj Packages",
    desc: `Immerse yourself in the profound significance of the annual pilgrimage with our intricately crafted Hajj packages. We prioritize every aspect of your journey, allowing you to concentrate wholeheartedly on your religious duties. Our comprehensive Hajj packages include meticulously planned itineraries, luxury accommodations, group activities, and expert guidance to ensure a smooth and fulfilling pilgrimage. Let us handle the details, so you can focus on the spiritual essence of this sacred journey, forging memories that will last a lifetime.`,
  },
  {
    title: "Customized Packages",
    desc: `Tailor your Hajj or Umrah experience to your specific requirements and preferences with our customized packages. Reach out to our dedicated team, and we will work closely with you to create a personalized pilgrimage journey that aligns perfectly with your needs. Whether you seek special accommodations, unique travel arrangements, or specific tour inclusions, we are committed to turning your aspirations into reality. Your spiritual fulfillment is our priority, and our bespoke packages ensure an experience that resonates with your individuality and devotion.`,
  },
];

const HajjUmrah = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDomLoaded(true);
    }, 500);
  }, []);
  return (
    <>
      <Breadcrumb
        pageName="Hajj & Umrah packages"
        description="At [Business Name], we understand the profound significance of Hajj and Umrah in the lives of Muslims. These sacred pilgrimages are deeply spiritual experiences that require meticulous planning and attention to detail. That's where we come in, offering meticulously crafted Hajj and Umrah packages to ensure a seamless and spiritually enriching journey"
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[700px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/hajj/kaaba.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[670px]" data-wow-delay=".2s">
                {domLoaded && (
                  <Slider
                    {...sliderSettings}
                    className="green-primary w-full rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
                  >
                    {hajjItems.map((item) => (
                      <div className="mb-9" key={item.title}>
                        <h3 className="mb-4 pb-4 text-center  text-[38px] font-bold text-black dark:text-white sm:text-2xl lg:text-[40px] xl:text-[40px]">
                          {item.title}
                        </h3>
                        <p className="text-center text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                          {item.desc}
                        </p>
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
