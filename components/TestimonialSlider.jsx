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

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      autoHeight={true}
      className="min-h-[400px] h-auto md:mt-24"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col lg:flex-row items-center gap-6 h-auto px-4 md:px-10 xl:px-16 py-6">
            
            {/* LEFT (Avatar + Info) */}
            <div className="w-full lg:max-w-[300px] flex flex-col items-center text-center lg:text-left mx-auto lg:mx-0">
              <div className="mb-2">
                <Image
                  src={person.image}
                  width={100}
                  height={100}
                  alt={person.name}
                  className="rounded-full"
                />
              </div>

              <div className="text-lg font-medium">{person.name}</div>

              <div className="text-[12px] uppercase font-extralight tracking-widest text-white/60">
                {person.position}
              </div>
            </div>

            {/* RIGHT (Quote + Message) */}
            <div className="flex-1 flex flex-col justify-center mt-4 lg:mt-0 lg:pl-20 relative">
              
              {/* Divider line (desktop only) */}
              <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-white/20"></div>

              {/* Quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto lg:mx-0"
                  aria-hidden
                />
              </div>

              {/* Message */}
              <p className="text-sm md:text-base xl:text-lg text-center lg:text-left text-white/80 leading-relaxed">
                {person.message}
              </p>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;