import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Sarah Johnson",
    position: "Product Manager",
    message:
      "Working with Aun was a great experience. He delivered a scalable SaaS dashboard with clean architecture, fast performance, and excellent attention to detail. Communication was smooth throughout the project.",
  },
  {
    image: "/t-avt-2.png",
    name: "Michael Brown",
    position: "Startup Founder",
    message:
      "Aun built our full-stack platform using Next.js and Node.js. The system is stable, fast, and handles real users without issues. His backend structure and API design were especially impressive.",
  },
  {
    image: "/t-avt-3.png",
    name: "Emily Davis",
    position: "UX/UI Designer",
    message:
      "He translated our designs into a pixel-perfect frontend with great responsiveness. The UI animations and performance optimization made the product feel very premium.",
  },
];

const TestimonialSlider = () => (
  <Swiper navigation modules={[Navigation]} autoHeight className="min-h-[400px] h-auto md:mt-24">
    {testimonialData.map((person, i) => (
      <SwiperSlide key={i}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            padding: "1.5rem 1rem 3rem",
          }}
          className="lg:flex-row lg:px-10 xl:px-16"
        >
          {/* Avatar + name */}
          <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", minWidth: "180px" }}
          >
            <Image
              src={person.image}
              width={90}
              height={90}
              alt={person.name}
              style={{ borderRadius: "50%", border: "2px solid var(--navy-500)", marginBottom: "0.75rem" }}
            />
            <p style={{ color: "var(--white-100)", fontWeight: 600, fontSize: "1rem", marginBottom: "0.25rem" }}>
              {person.name}
            </p>
            <p
              style={{
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent-400)",
                fontWeight: 500,
              }}
            >
              {person.position}
            </p>
          </div>

          {/* Divider (desktop) */}
          <div
            className="hidden lg:block"
            style={{ width: "1px", height: "160px", background: "var(--navy-500)", flexShrink: 0 }}
          />

          {/* Quote */}
          <div style={{ flex: 1, paddingLeft: 0 }} className="lg:pl-10">
            <FaQuoteLeft
              style={{ fontSize: "2.5rem", color: "var(--navy-500)", marginBottom: "1rem" }}
              aria-hidden
            />
            <p
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1.05rem)",
                lineHeight: 1.85,
                color: "var(--white-200)",
                textAlign: "left",
              }}
            >
              {person.message}
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default TestimonialSlider;
