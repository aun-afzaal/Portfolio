import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Button, Carousel, Modal } from "antd";
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
        <Carousel autoplay autoplaySpeed={5000} dots draggable swipeToSlide className="antd-carousel work-slider w-full md:max-w-[80dvw] mx-auto">
          {workSlides.slides.map((slide, i) => (
            <div key={i}>
              {/* Force Grid Layout with explicit heights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-1 sm:p-4 w-full md:min-h-[480px]">
                {slide.images.map((image, ii) => (
                  <div
                    key={ii}
                    className="project-card group relative w-full h-[200px] sm:h-[220px] rounded-md overflow-hidden border border-[var(--navy-500)] bg-black/20"
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
                    <div className="absolute bottom-3 left-2 right-2 bg-[var(--navy-800)]/95 p-2 flex items-center justify-between gap-2 z-20">
                      <span className="text-white text-xs font-semibold truncate max-w-[60%]">
                        {image.title}
                      </span>
                      <Button
                        type="text"
                        onClick={() => setOpenModal(image)}
                        className="!h-auto !bg-white/15 !px-2 !text-white hover:!bg-white/25 hover:!text-white"
                      >
                        VIEW PROJECT <BsArrowRight />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Modal */}
      {openModal && (
        <Modal open centered footer={null} onCancel={() => setOpenModal(null)} width={1100} className="project-modal">
            <ProjectPage slug={openModal?.link} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
};

export default WorkSlider;
