import { RxCode, RxGlobe, RxLayers, RxLightningBolt, RxRocket, RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCode,
    title: "Full-Stack Development",
    description: "Building scalable web apps using React, Next.js, Node.js, NestJS and PostgreSQL with production-ready architecture.",
  },
  {
    Icon: RxGlobe,
    title: "SaaS Platforms",
    description: "End-to-end SaaS systems including booking platforms, marketplaces, admin panels, and multi-tenant systems.",
  },
  {
    Icon: RxLayers,
    title: "Backend Systems",
    description: "API development, authentication systems, Stripe integration, WebSockets, and database architecture.",
  },
  {
    Icon: RxLightningBolt,
    title: "Real-time Applications",
    description: "Live dashboards, chat systems, notifications, tracking systems, and WebSocket-based applications.",
  },
  {
    Icon: RxRocket,
    title: "System Integration",
    description: "Integration with Stripe, AWS S3, Mailgun, PMS systems, and third-party APIs with secure workflows.",
  },
];

const ServiceSlider = () => (
  <Swiper
    breakpoints={{
      320: { slidesPerView: 1,  spaceBetween: 15 },
      640: { slidesPerView: 2,  spaceBetween: 15 },
      1024:{ slidesPerView: 3,  spaceBetween: 20 },
    }}
    pagination={{ clickable: true }}
    modules={[FreeMode, Pagination]}
    freeMode
    className="h-[340px] sm:h-[380px] w-full"
  >
    {serviceData.map((item, i) => (
      <SwiperSlide key={i}>
        <div className="service-card group h-full">
          <div className="service-card__icon">
            <item.Icon aria-hidden />
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--white-100)",
                marginBottom: "0.5rem",
                lineHeight: 1.4,
              }}
            >
              {item.title}
            </p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--white-300)" }}>
              {item.description}
            </p>
          </div>
          <RxArrowTopRight className="service-card__arrow" aria-hidden />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ServiceSlider;
