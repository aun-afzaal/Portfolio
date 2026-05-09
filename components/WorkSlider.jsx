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
        { title: "Revona SaaS Platform",        path: "https://www.abcodify.com/images/revona.png",          link: "/projects/revona" },
        { title: "Trumeid KYC Platform",         path: "https://www.abcodify.com/images/trumeid.png",         link: "/projects/trumeid" },
        { title: "AqarLink Rental Platform",     path: "https://www.abcodify.com/images/aqarlink.png",        link: "/projects/aqarlink" },
        { title: "Admiaro E-Commerce System",    path: "https://www.abcodify.com/images/admiaro.png",         link: "/projects/admiaro" },
      ],
    },
    {
      images: [
        { title: "Assistme Marketplace",         path: "https://www.abcodify.com/images/assistmein.png",      link: "/projects/assistmein" },
        { title: "Discord Bot System",            path: "",                                                     link: "/projects/discord-bot" },
        { title: "AI SEO System",                 path: "https://www.abcodify.com/images/ai-seo.png",          link: "/projects/ai-seo" },
        { title: "Order App",                     path: "https://www.abcodify.com/images/order-app.png",       link: "/projects/order-app" },
      ],
    },
    {
      images: [
        { title: "Trumeid Dashboard",             path: "https://www.abcodify.com/images/trumeid-dashboard.png", link: "/projects/trumeid-dashboard" },
        { title: "Invoice Management System",     path: "",                                                        link: "/projects/invoice" },
        { title: "Lottomax Admin Panel",          path: "https://www.abcodify.com/images/usalottomax-admin.png",  link: "/projects/usalottomax-admin" },
        { title: "Ice Cream Inventory",           path: "https://www.abcodify.com/images/icecream.png",            link: "/projects/icecream" },
      ],
    },
    {
      images: [
        { title: "UsaLottomax System",            path: "https://www.abcodify.com/images/usalottomax.png",     link: "/projects/usalottomax" },
        { title: "Pitchlane Platform",            path: "https://www.abcodify.com/images/pitchlane.png",       link: "/projects/pitchlane" },
        { title: "Admin AqarLink",                path: "https://www.abcodify.com/images/admin-aqarlink.png",  link: "/projects/admin-aqarlink" },
        { title: "Raap Builder",                  path: "",                                                     link: "/projects/raap-builder" },
      ],
    },
    {
      images: [
        { title: "Motorcycle Stand System",       path: "https://www.abcodify.com/images/madina-stand.png",   link: "/projects/madina-stand" },
        { title: "Portfolio System",              path: "https://www.abcodify.com/images/portfolio.png",      link: "/projects/portfolio" },
        { title: "Glass Calculator",              path: "",                                                    link: "/projects/glass-calc" },
        { title: "UsaLottomax Full",              path: "https://www.abcodify.com/images/usalottomax.png",    link: "/projects/usalottomax" },
      ],
    },
  ],
};

const WorkSlider = () => (
  <div className="w-full">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      grabCursor
      className="w-full sm:h-[520px] h-full"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              height: "100%",
            }}
          >
            {slide.images.map((image, ii) => (
              <div
                key={ii}
                className="work-slide-item"
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  height: "220px",
                  border: "1px solid var(--navy-500)",
                }}
              >
                <Image
                  src={image.path || "/no-image.png"}
                  alt={image.title}
                  fill
                  style={{ objectFit: image.path ? "cover" : "contain" }}
                />
                <div className="work-slide-overlay" />
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1rem",
                    transform: "translateY(1rem)",
                    transition: "transform var(--dur-base) var(--ease-out)",
                  }}
                  className="group-hover:translate-y-0"
                >
                  <Link
                    href={image.link}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "var(--white-100)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    VIEW PROJECT <BsArrowRight />
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

export default WorkSlider;
