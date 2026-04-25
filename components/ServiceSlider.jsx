import {
  RxCode,
  RxGlobe,
  RxLayers,
  RxLightningBolt,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// ✅ REAL SERVICES (based on your actual work)
const serviceData = [
  {
    Icon: RxCode,
    title: "Full-Stack Development",
    description:
      "Building scalable web apps using React, Next.js, Node.js, NestJS and PostgreSQL with production-ready architecture.",
  },
  {
    Icon: RxGlobe,
    title: "SaaS Platforms",
    description:
      "End-to-end SaaS systems including booking platforms, marketplaces, admin panels, and multi-tenant systems.",
  },
  {
    Icon: RxLayers,
    title: "Backend Systems",
    description:
      "API development, authentication systems, Stripe integration, WebSockets, and database architecture.",
  },
  {
    Icon: RxLightningBolt,
    title: "Real-time Applications",
    description:
      "Live dashboards, chat systems, notifications, tracking systems, and WebSocket-based applications.",
  },
  {
    Icon: RxRocket,
    title: "System Integration",
    description:
      "Integration with Stripe, AWS S3, Mailgun, PMS systems, and third-party APIs with secure workflows.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode={true}
      className="h-[320px] sm:h-[360px] w-full"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">

            {/* ICON */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* TITLE + DESCRIPTION */}
            <div className="flex-1">
              <div className="mb-2 text-lg font-semibold">
                {item.title}
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>

            {/* ARROW */}
            <div className="mt-6 text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;