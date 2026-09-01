import { motion } from "framer-motion";

import Bulb from "./Bulb";
import Circles from "./Circles";
import SectionLabel from "./SectionLabel";
import ServiceSlider from "./ServiceSlider";
import { fadeIn } from "../variants";

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
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Engineering <span className="text-accent">Solutions.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
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
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
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
