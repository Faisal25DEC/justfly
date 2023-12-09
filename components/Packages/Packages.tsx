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

const Packages = () => {
  const packages = [
    {
      img: "/images/packages/basic-hotel.jpg",
      title: "Basic",
      color: "#484d49",
      price: 299,
    },
    {
      img: "/images/packages/silver-hotel.jpg",
      title: "Silver",
      color: "#355c3d",
      price: 399,
    },
    {
      img: "/images/packages/gold-hotel.jpg",
      title: "Gold",
      color: "#cacc33",
      price: 499,
    },
    {
      img: "/images/packages/hotel.jpg",
      title: "Premium",
      color: "#ceb407",
      price: 699,
    },
  ];

  return (
    <div className="section-bg r cursor-pointer pt-6">
      <p className="text-green-primary text-center text-[22px] font-bold">
        Packages that delivers the most value
      </p>
      <h1 className="pt-6 text-center text-[36px] font-semibold">
        Offers and <span className="text-green-primary">Packages</span>
      </h1>
      <section className="m-auto grid w-[97.5%] grid-cols-1  gap-8 pb-6 pt-12 md:w-[85%] md:grid-cols-4 ">
        {packages.map((item) => {
          return (
            <div
              key={item.price}
              className="card-shadow  rounded-xl pb-2   hover:border-[1px] hover:border-[#d7f8d4]"
            >
              <div>
                <img
                  src={item.img}
                  alt="package-image"
                  className="m-auto h-[12rem] w-[100%] rounded-t-xl object-cover"
                />
              </div>
              <div className="m-auto flex w-[95%] flex-col gap-4 px-4 py-4">
                <h1
                  style={{ color: item.color }}
                  className="text-center text-[24px] font-semibold"
                >
                  {item.title}
                </h1>
                <div className="flex items-center justify-between">
                  <button className="rounded-lg bg-[#229e43] px-2 py-2 text-neutral-100 hover:opacity-90">
                    Contact us
                  </button>
                  <h2 className="font-medium">
                    At{" "}
                    <span className="text-[20px] font-semibold text-[#229e43]">
                      £{item.price}
                    </span>
                    /person
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Packages;
