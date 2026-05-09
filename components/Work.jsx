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
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <SectionLabel>Portfolio</SectionLabel>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work <span className="text-accent">Portfolio</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Production systems, SaaS platforms, and digital products built
              with modern technologies — each demonstrating real-world
              problem-solving and scalable engineering.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
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
