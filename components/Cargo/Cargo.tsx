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

      <section className="py-4 md:py-6">
        <div className="container">
          <div className="-mx-4 mb-16 flex flex-wrap items-center justify-between md:mb-20 lg:mb-28">
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
      "We offer comprehensive cargo transportation solutions, ensuring timely and pristine delivery. Our well-maintained fleet handles diverse cargo types, guaranteeing reliable service for your shipments.",
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
