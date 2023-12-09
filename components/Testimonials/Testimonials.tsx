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
import { testitmonialsData } from "./testimonialsData";
// import "./swiper-cards.css";

const Testimonials = () => {
  return (
    <div className="section-bg r cursor-pointer pt-6">
      <p className="text-green-primary text-center text-[22px] font-bold">
        What They Say
      </p>
      <h1 className="pt-6 text-center text-[36px] font-semibold">
        What Our <span className="text-green-primary">Customers</span> Say
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
          {testitmonialsData.map((item) => {
            return (
              <SwiperSlide key={item.avatar}>
                <div className="card-shadow mb-2 flex h-[max-content] max-w-[24rem] flex-col gap-[1px] rounded-xl  pt-4 hover:border-[3px] hover:border-[#d7f8d4]">
                  <div className="m-auto flex h-[80%] w-[85%] flex-col gap-2 overflow-hidden rounded-md ">
                    <h3 className="text-[18px] font-bold">
                      &quot;{item.oneWord}&quot;
                    </h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="m-auto flex w-[85%] items-center gap-[0.75rem] py-6">
                    <img
                      src={item.avatar}
                      alt="avatar"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">{item.name}</p>
                      <p>{item.occupation}</p>
                    </div>
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

export default Testimonials;
