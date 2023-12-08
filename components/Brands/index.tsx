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
  slidesToShow: 3,
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
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <Slider
              {...sliderSettings}
              className="rounded-sm bg-gray-light px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
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
