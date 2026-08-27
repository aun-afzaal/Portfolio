import { motion } from "framer-motion";

import Bulb from "./Bulb";
import Circles from "./Circles";
import WorkSlider from "./WorkSlider";
import SectionLabel from "./SectionLabel";
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <div className="bg-[var(--navy-800)] overflow-hidden xl:py-36 py-20 flex items-center w-full relative h-full">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text Section */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <SectionLabel>Featured Projects</SectionLabel>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Selected <span className="text-accent">Systems</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              A showcase of production-grade systems, cloud-native SaaS
              solutions, and scalable frontend architectures built to handle
              complex business logic and high traffic.
            </motion.p>
          </div>

          {/* Work Slider Component */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
