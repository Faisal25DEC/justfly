import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import SingleFeature from "../../components/Features/SingleFeature";
import SectionTitle from "../../components/Common/SectionTitle";
import supportPic from "../../public/images/support.jpg";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const InjuryAndClaims = () => {
  return (
    <>
      <Breadcrumb pageName="Injury claims" />

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] dark:border-white/[.15] ">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 py-12 lg:w-1/2">
                <SectionTitle
                  title="Your Safety is Our Priority"
                  paragraph="We understand that unexpected events can occur during your travels, and your well-being is our utmost priority. In the unfortunate event of unexpected changes to your travel plans, we are here to guide you through the process of addressing these situations."
                  mb="44px"
                />
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <Image
                  src={supportPic}
                  alt="support"
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-3 lg:py-28">
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
      "If you experience any unexpected incidents during your travels, it&lsquo;s important to notify us as soon as possible. Contact our dedicated support team at [Emergency Contact Number] to report the details of the incident. We are available 24/7 to assist you and provide the necessary support",
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
      "In the event of unexpected changes to your travel plans, such as flight cancellations or itinerary alterations, our team is here to assist you. We will work tirelessly to find suitable alternatives or assist you in obtaining refunds where applicable. Communication is key, so keep us informed of any issues you encounter during your journey.",
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
      "If you need to file a claim for a travel-related incident, our claims process is designed to be straightforward. Contact our customer support team, and they will guide you through the necessary steps and documentation required to initiate a claim.",
  },
];
