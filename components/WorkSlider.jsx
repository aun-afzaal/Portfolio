import Image from "next/image";
import { BsArrowRight, BsX } from "react-icons/bs";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectPage from "./ProjectPage";
import { useState } from "react";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Revona SaaS Platform",
          path: "https://www.abcodify.com/images/revona.png",
          link: "revona",
        },
        {
          title: "Trumeid KYC Platform",
          path: "https://www.abcodify.com/images/trumeid.png",
          link: "trumeid",
        },
        {
          title: "AqarLink Rental Platform",
          path: "https://www.abcodify.com/images/aqarlink.png",
          link: "aqarlink",
        },
        {
          title: "Admiaro E-Commerce System",
          path: "https://www.abcodify.com/images/admiaro.png",
          link: "admiaro",
        },
      ],
    },
    {
      images: [
        {
          title: "Assistme Marketplace",
          path: "https://www.abcodify.com/images/assistmein.png",
          link: "assistmein",
        },
        {
          title: "Discord Bot System",
          path: "",
          link: "discord-bot",
        },
        {
          title: "AI SEO System",
          path: "https://www.abcodify.com/images/ai-seo.png",
          link: "ai-seo",
        },
        {
          title: "Order App",
          path: "https://www.abcodify.com/images/order-app.png",
          link: "order-app",
        },
      ],
    },
    {
      images: [
        {
          title: "Trumeid Dashboard",
          path: "https://www.abcodify.com/images/trumeid-dashboard.png",
          link: "trumeid-dashboard",
        },
        {
          title: "Invoice Management System",
          path: "",
          link: "invoice",
        },
        {
          title: "Lottomax Admin Panel",
          path: "https://www.abcodify.com/images/usalottomax-admin.png",
          link: "usalottomax-admin",
        },
        {
          title: "Ice Cream Inventory",
          path: "https://www.abcodify.com/images/icecream.png",
          link: "icecream",
        },
      ],
    },
    {
      images: [
        {
          title: "UsaLottomax System",
          path: "https://www.abcodify.com/images/usalottomax.png",
          link: "usalottomax",
        },
        {
          title: "Pitchlane Platform",
          path: "https://www.abcodify.com/images/pitchlane.png",
          link: "pitchlane",
        },
        {
          title: "Admin AqarLink",
          path: "https://www.abcodify.com/images/admin-aqarlink.png",
          link: "admin-aqarlink",
        },
        { title: "Raap Builder", path: "", link: "raap-builder" },
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
        { title: "Glass Calculator", path: "", link: "/projects/glass-calc" },
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
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          // slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full sm:h-[520px] h-full md:max-w-[70dvw] mx-auto"
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
                    className="group work-slide-overlay"
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
                      style={{
                        objectFit: image.path ? "cover" : "contain",
                      }}
                    />

                    {/* Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      }}
                    />

                    {/* Button */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1.5rem",
                        left: "1rem",
                      }}
                    >
                      <button
                        onClick={() => setOpenModal(image)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "white",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        VIEW PROJECT <BsArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {openModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem",
          }}
        >
          <div
            className="border-2 rounded-md border-[var(--accent-500)]"
            style={{
              width: "100%",
              maxWidth: "1000px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            {/* Close Button */}

            <ProjectPage slug={openModal?.link} setOpenModal={setOpenModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;
