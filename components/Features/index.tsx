import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <div className="section-bg-fade">
        <section
          id="features"
          className=" m-auto w-[97.5%] pb-12 pt-4 md:w-[85%] md:py-8 "
        >
          <div className="container">
            <SectionTitle
              title={
                <h1 className="pb-8 text-[44px] font-bold">
                  Why Choose <span className="text-green-primary">Us</span>
                </h1>
              }
              paragraph={
                <p className="font-medium">
                  At <span className="text-green-primary">Justfly Travels</span>
                  , we understand that travel planning can be overwhelming. That
                  is why we are here to simplify the process for you. Here are
                  some compelling reasons to choose us for your travel needs
                </p>
              }
              center
              className="max-w-2xl pb-[4rem]"
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
