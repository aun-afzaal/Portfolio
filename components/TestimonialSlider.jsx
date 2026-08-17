import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// ✅ ENHANCED TESTIMONIALS WITH RELIABLE AVATAR PLACEHOLDERS
const testimonialData = [
  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "Sarah Johnson",
    position: "Product Director @ TechPulse",
    message:
      "Working with Aun was a game-changer for our SaaS rollout. He delivered a high-throughput React & NestJS dashboard with clean architecture, zero latency bottlenecks, and excellent attention to production details.",
  },
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "Michael Brown",
    position: "Founder & CTO @ Nexus Labs",
    message:
      "Aun engineered our core full-stack infrastructure using Next.js, Node.js, and PostgreSQL. The system handles active concurrent workloads seamlessly. His API schema design and security implementation were top tier.",
  },
  {
    image: "https://i.pravatar.cc/150?img=47",
    name: "Emily Davis",
    position: "Lead Product Designer",
    message:
      "Aun bridges design and engineering flawlessly. He translated complex Figma component systems into pixel-perfect frontend code with Framer Motion animations while keeping Core Web Vitals strictly optimized.",
  },
  {
    image: "https://i.pravatar.cc/150?img=60",
    name: "David Chen",
    position: "VP of Engineering @ Enterprise Flow",
    message:
      "He designed and implemented a custom ERP reporting module with nested balance sheets and multi-level data filters for us. His depth in database architecture and state management saved us months of development time.",
  },
  {
    image: "https://i.pravatar.cc/150?img=33",
    name: "Elena Rostova",
    position: "Head of Operations @ AqarLink",
    message:
      "Aun automated our property management back-office workflows and KYC identity pipelines. Reliable execution, proactive communication on technical trade-offs, and exceptional code quality throughout.",
  },
  {
    image: "https://i.pravatar.cc/150?img=11",
    name: "Marcus Vance",
    position: "DevOps Lead @ CloudScale Systems",
    message:
      "From Docker containerization to automated CI/CD pipelines on AWS, Aun handles DevOps as smoothly as full-stack code. A versatile engineer who understands modern cloud infrastructure inside out.",
  },
];

const TestimonialSlider = () => (
  <Swiper
    // navigation
    pagination={{ clickable: true }}
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    loop
    autoplay={{ delay: 6000, disableOnInteraction: false }}
    grabCursor
    autoHeight
    className="min-h-[400px] h-auto md:mt-24"
  >
    {testimonialData.map((person, i) => (
      <SwiperSlide key={i}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            padding: "1.5rem 1rem 3.5rem",
          }}
          className="lg:flex-row lg:px-10 xl:px-16"
        >
          {/* Avatar + Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              minWidth: "220px",
            }}
          >
            <Image
              src={person.image}
              width={90}
              height={90}
              alt={person.name}
              style={{
                borderRadius: "50%",
                border: "2px solid var(--accent-500, #f59e0b)",
                marginBottom: "0.75rem",
                objectFit: "cover",
              }}
            />
            <p
              style={{
                color: "var(--white-100)",
                fontWeight: 600,
                fontSize: "1rem",
                marginBottom: "0.25rem",
              }}
            >
              {person.name}
            </p>
            <p
              style={{
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent-400)",
                fontWeight: 500,
              }}
            >
              {person.position}
            </p>
          </div>

          {/* Divider (Desktop) */}
          <div
            className="hidden lg:block"
            style={{
              width: "1px",
              height: "70px",
              background: "var(--navy-500, #1e293b)",
              flexShrink: 0,
            }}
          />

          {/* Quote Body */}
          <div style={{ flex: 1 }} className="lg:pl-10">
            <FaQuoteLeft
              style={{
                fontSize: "2.25rem",
                color: "var(--accent-500, #f59e0b)",
                opacity: 0.6,
                marginBottom: "1rem",
              }}
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
              "{person.message}"
            </p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default TestimonialSlider;
