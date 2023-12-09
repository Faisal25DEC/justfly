"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "./swiper-cards.css";
import { topDestinations } from "./data";

const TopDestinations = () => {
  return (
    <div className="section-bg r cursor-pointer pt-6">
      <p className="text-green-primary text-center text-[22px] font-bold">
        Top Destinations
      </p>
      <h1 className="pt-6 text-center text-[36px] font-semibold">
        Most <span className="text-green-primary">Popular</span> Places To Book
        From
      </h1>
      <section className="m-auto w-[97.5%] pb-6 pt-12 md:w-[85%]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop
          breakpoints={{
            500: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },

            768: {
              slidesPerView: 2,
              slidesPerGroup: 1,

              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1,

              spaceBetween: 20,
            },
          }}
        >
          {topDestinations.map((item) => {
            return (
              <SwiperSlide key={item.img}>
                <div className="card-shadow mb-2 flex h-[28rem] max-w-[24rem] flex-col gap-[1px] rounded-xl  pt-4 hover:border-[3px] hover:border-[#d7f8d4]">
                  <div className="m-auto h-[80%] w-[85%] overflow-hidden rounded-md ">
                    <img
                      src={item.img}
                      alt=""
                      className="h-[100%] object-cover"
                    />
                  </div>
                  <div className="m-auto flex w-[85%] flex-col gap-[0.75rem] py-6">
                    <h3 className="text-[20px] font-semibold">
                      {item.state}, {item.country}
                    </h3>
                    <h4 className=" font-medium">
                      <span className="text-[18px]">Starting From</span>{" "}
                      <span className="text-[22px] text-primary">
                        ${item.price}
                      </span>
                      <span className="text-[16px] font-light">/person</span>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default TopDestinations;
