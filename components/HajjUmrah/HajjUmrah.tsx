import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const HajjUmrah = () => {
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
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/hajj.jpg"
                  alt="about image"
                  fill
                  className="drop-shadow-three"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Umrah Packages
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our Umrah packages are tailored for individuals and families
                    looking to undertake this sacred journey. We offer a range
                    of options, from economy to premium, to accommodate your
                    needs.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Hajj Packages
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our Hajj packages are meticulously designed to cater to the
                    unique requirements of this annual pilgrimage. We take care
                    of all aspects of your journey, ensuring you can focus on
                    your religious duties
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Customized Packages
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    If you have specific requirements or preferences, we can
                    create a customized Hajj or Umrah package just for you.
                    Contact us to discuss your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HajjUmrah;
