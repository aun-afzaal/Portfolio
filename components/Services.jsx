import { motion } from "framer-motion";

import Bulb from "./Bulb";
import Circles from "./Circles";
import SectionLabel from "./SectionLabel";
import ServiceSlider from "./ServiceSlider";
import { fadeIn } from "../variants";

// ✅ REAL SERVICES DATA (Technical & Value-Oriented)
export const serviceData = [
  {
    title: "Full-Stack Development",
    description:
      "Engineering resilient, production-grade web applications using React, Next.js, Node.js, and NestJS backed by robust PostgreSQL architecture.",
  },
  {
    title: "Backend & Systems Engineering",
    description:
      "Designing high-concurrency REST & GraphQL APIs, distributed auth pipelines, WebSockets, payment gateways (Stripe), and clean microservices.",
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end multi-tenant SaaS architecture, complex marketplace solutions, administrative control panels, and real-time state synchronization.",
  },
  {
    title: "Real-Time Infrastructure",
    description:
      "Building low-latency event-driven systems using WebSockets, pub/sub messaging, dynamic notifications, live telemetry, and interactive dashboards.",
  },
  {
    title: "Third-Party Integrations & SDKs",
    description:
      "Seamless integration of payment rails (Stripe), AWS cloud storage, Mailgun, external auth providers, and custom REST API wrappers.",
  },
  {
    title: "UI Engineering & Performance",
    description:
      "Crafting pixel-perfect, accessible UI components with React, Tailwind CSS, and Framer Motion, optimized for Core Web Vitals and SEO.",
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
            <SectionLabel className="text-capitalize">
              Capabilities
            </SectionLabel>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Engineering <span className="text-accent">Solutions.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Architecting full-stack digital products—from multi-tenant SaaS
              platforms and low-latency real-time apps to enterprise-grade
              analytics dashboards. Focused on maintainability, high throughput,
              and clean software architecture.
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
