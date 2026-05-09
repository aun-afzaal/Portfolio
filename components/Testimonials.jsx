import { motion } from "framer-motion";

import TestimonialSlider from "./TestimonialSlider";
import SectionLabel from "./SectionLabel";
import { fadeIn } from "../variants";

const Testimonials = () => {
  return (
    <div className="bg-[var(--navy-900)] xl:py-36 py-20 flex items-center w-full relative h-full">
      <div className="container mx-auto h-full flex flex-col md:justify-center">
        <SectionLabel>Client feedback</SectionLabel>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0 w-full text-center"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
