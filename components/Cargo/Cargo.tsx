import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import SectionTitle from "../../components/Common/SectionTitle";
import { Feature } from "@/types/feature";
import SingleFeature from "../../components/Features/SingleFeature";
import Image from "next/image";
import cargoPic from "../../public/images/cargo.jpg";

const Cargo = () => {
  return (
    <>
      <Breadcrumb
        pageName="Cargo"
        // description="We understand that unexpected events can occur during your travels, and your well-being is our utmost priority. In the unfortunate event of unexpected changes to your travel plans, we are here to guide you through the process of addressing these situations."
      />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 mb-16 flex flex-wrap items-center justify-between md:mb-20 lg:mb-28">
            <div className="w-full px-4 py-12 lg:w-1/2">
              <SectionTitle
                // center
                title="Best Cargo Services"
                paragraph="Our commitment to excellence sets us apart in the world of cargo and logistics. Here are some key reasons why you should partner with us."
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

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Reliable transportation",
    paragraph:
      "We provide a comprehensive range of cargo transportation solutions, ensuring your cargo reaches its destination on time and in optimal condition. Our fleet of vehicles is well-maintained and equipped to handle various types of cargo",
  },
  {
    id: 2,
    title: "Experienced team",
    paragraph:
      "Our team of experienced professionals understands the intricacies of cargo logistics. We work closely with you to tailor our services to your specific requirements, offering a personalized approach to every shipment.",
  },
  {
    id: 3,
    title: "Global reach",
    paragraph:
      "Whether your cargo needs to travel domestically or internationally, we've got you covered. Our extensive network of partners and agents allows us to facilitate seamless cross-border and international shipments",
  },
];

export default Cargo;
