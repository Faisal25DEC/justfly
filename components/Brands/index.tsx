"use client";
import brandsData from "./brandsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleBrand from "./SingleBrand";

const sliderSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 4,
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

const Brands = () => {
  return (
    <section className="section-bg pt-8">
      <div className="w-full">
        <div className=" flex flex-wrap">
          <div className="m-auto w-[97.5%] md:w-[85%]">
            <Slider
              {...sliderSettings}
              className="green-primary rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
