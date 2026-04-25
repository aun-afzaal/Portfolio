import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Revona SaaS Platform",
          path: "https://www.abcodify.com/images/revona.png",
          link: "/projects/revona",
        },
        {
          title: "Trumeid KYC Platform",
          path: "https://www.abcodify.com/images/trumeid.png",
          link: "/projects/trumeid",
        },
        {
          title: "AqarLink Rental Platform",
          path: "https://www.abcodify.com/images/aqarlink.png",
          link: "/projects/aqarlink",
        },
        {
          title: "Admiaro E-Commerce System",
          path: "https://www.abcodify.com/images/admiaro.png",
          link: "/projects/admiaro",
        },
      ],
    },
    {
      images: [
        {
          title: "Assistme Marketplace",
          path: "https://www.abcodify.com/images/assistmein.png",
          link: "/projects/assistmein",
        },
        {
          title: "UsaLottomax System",
          path: "https://www.abcodify.com/images/usalottomax.png",
          link: "/projects/usalottomax",
        },
        {
          title: "AI SEO System",
          path: "https://www.abcodify.com/images/ai-seo.png",
          link: "/projects/ai-seo",
        },
        {
          title: "Order App",
          path: "https://www.abcodify.com/images/order-app.png",
          link: "/projects/order-app",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div className="w-full">

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        className="w-full h-[520px] sm:h-[560px]"
      >
        {workSlides.slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">

              {slide.images.map((image, imageI) => (
                <div
                  key={imageI}
                  className="relative group rounded-lg overflow-hidden h-[220px] sm:h-full"
                >
                  {/* IMAGE */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition duration-500" />

                  {/* TEXT */}
                  <div className="absolute bottom-8 left-4 translate-y-6 group-hover:translate-y-0 transition duration-300">
                    <Link
                      href={image.link}
                      className="flex items-center gap-x-2 text-white text-xs tracking-widest"
                    >
                      <span>VIEW</span>
                      <span>PROJECT</span>
                      <BsArrowRight />
                    </Link>
                  </div>

                </div>
              ))}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default WorkSlider;