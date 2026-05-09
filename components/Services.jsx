import { motion } from "framer-motion";

import Bulb from "./Bulb";
import Circles from "./Circles";
import SectionLabel from "./SectionLabel";
import ServiceSlider from "./ServiceSlider";
import { fadeIn } from "../variants";

// ✅ REAL SERVICES DATA (from your experience)
export const serviceData = [
  {
    title: "Full-Stack Development",
    description:
      "Building scalable web applications using React, Next.js, Node.js, NestJS and PostgreSQL with production-grade architecture.",
  },
  {
    title: "Backend Engineering",
    description:
      "Designing APIs, authentication systems, WebSockets, Stripe integrations, and scalable backend systems with clean architecture.",
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS platforms including booking systems, marketplaces, admin dashboards, and multi-tenant systems.",
  },
  {
    title: "Real-time Systems",
    description:
      "Live applications using WebSockets, notifications, chat systems, tracking systems, and real-time dashboards.",
  },
  {
    title: "Third-party Integrations",
    description:
      "Integration of Stripe, AWS S3, Mailgun, PMS systems, authentication providers, and external APIs.",
  },
  {
    title: "UI Engineering",
    description:
      "Responsive UI development using React, Tailwind CSS, and Framer Motion with modern component architecture.",
  },
];

const Services = () => {
  return (
    <div className="bg-[var(--navy-800)] xl:py-36 py-20 flex items-center w-full relative h-full">
      <Circles />
      <Bulb />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">

          {/* LEFT TEXT SECTION */}
          <div className="text-center flex xl:w-[40vw] flex-col lg:text-left mb-4 xl:mb-0">
          <SectionLabel className="text-capitalize">What i offer</SectionLabel>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I build full-stack digital products including SaaS platforms,
              marketplaces, real-time systems, and enterprise dashboards.
              Focused on scalable architecture, performance, and clean engineering
              using modern web technologies.
            </motion.p>

          </div>

          {/* RIGHT SLIDER */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Services;