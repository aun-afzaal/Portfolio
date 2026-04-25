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
          title: "Discord Bot System",
          path: "",
          link: "/projects/discord-bot",
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

    {
      images: [
        {
          title: "Trumeid Dashboard",
          path: "https://www.abcodify.com/images/trumeid-dashboard.png",
          link: "/projects/trumeid-dashboard",
        },
        {
          title: "Invoice Management System",
          path: "",
          link: "/projects/invoice",
        },
        {
          title: "Lottomax Admin Panel",
          path: "https://www.abcodify.com/images/usalottomax-admin.png",
          link: "/projects/usalottomax-admin",
        },
        {
          title: "Ice Cream Inventory",
          path: "https://www.abcodify.com/images/icecream.png",
          link: "/projects/icecream",
        },
      ],
    },

    {
      images: [
        {
          title: "UsaLottomax System",
          path: "https://www.abcodify.com/images/usalottomax.png",
          link: "/projects/usalottomax",
        },
        {
          title: "Pitchlane Platform",
          path: "https://www.abcodify.com/images/pitchlane.png",
          link: "/projects/pitchlane",
        },
        {
          title: "Admin AqarLink",
          path: "https://www.abcodify.com/images/admin-aqarlink.png",
          link: "/projects/admin-aqarlink",
        },
        {
          title: "Raap Builder",
          path: "",
          link: "/projects/raap-builder",
        },
      ],
    },

    {
      images: [
        {
          title: "Motorcycle Stand System",
          path: "https://www.abcodify.com/images/madina-stand.png",
          link: "/projects/madina-stand",
        },
        {
          title: "Portfolio System",
          path: "https://www.abcodify.com/images/portfolio.png",
          link: "/projects/portfolio",
        },
        {
          title: "Glass Calculator",
          path: "",
          link: "/projects/glass-calc",
        },
        {
          title: "UsaLottomax Full",
          path: "https://www.abcodify.com/images/usalottomax.png",
          link: "/projects/usalottomax",
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
          delay: 50000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        className="w-full sm:h-[520px] h-full"
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
                    src={image.path ? image.path: "/no-image.png"}
                    alt={image.title}
                    fill
                    className={`${image.path ? "object-cover" : "border border-[#4a22bd] rounded-lg"}`}
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