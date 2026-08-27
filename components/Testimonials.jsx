import { motion } from "framer-motion";

import TestimonialSlider from "./TestimonialSlider";
import SectionLabel from "./SectionLabel";
import { fadeIn } from "../variants";

const Testimonials = () => {
  return (
    <div className="bg-[var(--navy-900)] xl:py-36 py-20 flex items-center w-full relative h-full">
      <div className="container mx-auto h-full flex flex-col md:justify-center">
        <div className="text-center">
          <SectionLabel>Social Proof</SectionLabel>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            exit="hidden"
            className="h2 mb-4 xl:mb-0 w-full"
          >
            Engineering <span className="text-accent">Endorsements.</span>
          </motion.h2>
        </div>

        {/* Testimonial Slider Component */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
