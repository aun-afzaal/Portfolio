import Image from "next/image";
import { BsArrowRight, BsX } from "react-icons/bs";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectPage from "./ProjectPage";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          link: "madina-stand",
        },
        {
          title: "Portfolio System",
          path: "https://www.abcodify.com/images/portfolio.png",
          link: "portfolio",
        },
        { title: "Glass Calculator", path: "", link: "glass-calc" },
        {
          title: "UsaLottomax Full",
          path: "https://www.abcodify.com/images/usalottomax.png",
          link: "usalottomax",
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
          modules={[Pagination, Navigation, Autoplay]}
          // navigation
          slidesPerView={1}
          loop={true}
          observer={true}
          observeParents={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full md:max-w-[80dvw] mx-auto pb-12"
        >
          {workSlides.slides.map((slide, i) => (
            <SwiperSlide key={i} className="!h-auto">
              {/* Force Grid Layout with explicit heights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 w-full min-h-[480px]">
                {slide.images.map((image, ii) => (
                  <div
                    key={ii}
                    className="group relative w-full h-[220px] rounded-md overflow-hidden border border-[var(--navy-500)] bg-black/20"
                  >
                    <Image
                      src={image.path || "/no-image.png"}
                      alt={image.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      style={{
                        objectFit: image.path ? "cover" : "contain",
                      }}
                      priority={i === 0 && ii < 2}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                    {/* Button & Title Container */}
                    <div className="absolute bottom-4 bg-[var(--navy-800)] p-2 left-2 right-4 flex items-center justify-between z-20">
                      <span className="text-white text-xs font-semibold truncate max-w-[60%]">
                        {image.title}
                      </span>
                      <button
                        onClick={() => setOpenModal(image)}
                        className="flex items-center gap-2 text-white text-[0.7rem] tracking-wider font-semibold uppercase bg-transparent border-none cursor-pointer hover:text-[var(--accent-500)] transition-colors"
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="border-2 rounded-md border-[var(--accent-500)] w-full max-w-[1000px] max-h-[90vh] overflow-y-auto relative bg-[var(--navy-900)]">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-white text-2xl z-50 hover:text-red-500 transition-colors"
            >
              <BsX />
            </button>
            <ProjectPage slug={openModal?.link} setOpenModal={setOpenModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;
