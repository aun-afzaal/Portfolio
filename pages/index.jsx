import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen relative py-20 lg:py-0 w-full">
      {/* text */}
      <div className="w-full h-[100vh] bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto xl:mr-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 xl:text-[56px] leading-tight"
          >
            Building <br />
            <span className="text-accent">Modern Web Experiences</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-s xl:max-w-[600px] mx-auto xl:mx-0 mb-10 xl:mb-12"
          >
            I am Muhammad Aun, a passionate Web and Mobile Application Developer
            specializing in building modern, high-performance digital experiences
            using React.js, Next.js, and Python.

            I focus on creating fast, scalable, and SEO-optimized web applications
            that help businesses grow online and improve user engagement.

            My expertise includes frontend development, backend API integration,
            UI/UX design, and full-stack web solutions. I build responsive websites,
            dashboards, SaaS platforms, and mobile-friendly applications with clean,
            maintainable code and modern design principles.

            Every project I work on is optimized for performance, accessibility, and
            search engine visibility to ensure strong real-world impact.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}
      <div className="absolute right-0 bottom-0 w-full lg:w-[1280px] h-full">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <div className="absolute inset-0 z-0">
  <ParticlesContainer />
</div>

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:-bottom-32 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;