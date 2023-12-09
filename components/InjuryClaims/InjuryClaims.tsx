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

      <section className="py-4 md:py-8 ">
        <div className="container">
          <div className="border-b border-body-color/[.15] dark:border-white/[.15] ">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 py-12 md:px-12 lg:w-1/2">
                <SectionTitle
                  title={
                    <h1 className="pb-4 text-center text-[36px] font-bold">
                      Your <span className="text-green-primary">Safety</span> Is
                      Our Priority
                    </h1>
                  }
                  paragraph={
                    <p className="text-center font-medium ">
                      At Justfly, our commitment to your well-being extends
                      beyond seamless travel experiences. We understand that
                      unexpected events can disrupt even the most carefully
                      planned journeys. In such instances, our dedicated team is
                      here to provide guidance and support, navigating you
                      through the necessary steps to address any unforeseen
                      changes to your travel plans. Whether it is a sudden
                      change in itinerary, flight disruptions, or other
                      unexpected challenges, rest assured that your comfort and
                      safety remain our top priority.
                    </p>
                  }
                  mb="44px"
                />
              </div>

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
