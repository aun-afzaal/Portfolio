import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "profile",
    info: [
      {
        title: "Muhammad Aun",
        stage: "Software Engineer · Pakistan",
      },
      {
        title: "Location",
        stage: "Lahore, Punjab, Pakistan",
      },
      {
        title: "Email",
        stage: "codewithaun@gmail.com",
      },
      {
        title: "Phone",
        stage: "+92 336 1484463",
      },
    ],
  },

  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "Backend & Tools",
        icons: [SiNextdotjs, FaReact, FaJs],
      },
      {
        title: "UI/UX & Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Software Engineer - Simula Lab (UK)",
        stage: "2025 - Current",
      },
      {
        title: "Business Data Analyst - Excellence Delivered",
        stage: "2025",
      },
      {
        title: "Web Developer - AccellionX",
        stage: "2023 - 2025",
      },
    ],
  },

  {
    title: "education",
    info: [
      {
        title: "BS Information Technology - University of Punjab",
        stage: "2019 - 2024",
      },
      {
        title: "FSc Pre-Engineering - Punjab Group of Colleges",
        stage: "2017 - 2019",
      },
      {
        title: "Matriculation - Islamia Public School",
        stage: "2015 - 2017",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
        >
          Building <span className="text-accent">scalable</span> digital products
          with modern engineering.
        </motion.h2>

        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
        >
          Software Engineer with experience building full-stack applications using
          React, Node.js, NestJS, and PostgreSQL. I’ve worked on production systems
          including SaaS platforms, marketplaces, KYC systems, and real-time
          applications serving 1000+ users. Focused on performance, scalability, and
          clean architecture.
        </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
          <div className="flex flex-1 xl:gap-x-6">

          {/* experience */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={3} duration={4} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
              Years of real-world experience
            </div>
          </div>

          {/* clients / companies */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={3} duration={4} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
              Companies worked with
            </div>
          </div>

          {/* projects */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={15} duration={4} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
              Production projects delivered
            </div>
          </div>

          {/* systems / impact */}
          <div className="relative flex-1">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={1000} duration={4} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
              Users served across systems
            </div>
          </div>

          </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons && (
                    <div className="flex gap-x-4 mt-2 md:mt-0">
                      {item.icons.map((Icon, iconI) => (
                        <div key={iconI} className="text-2xl text-white">
                          <Icon />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
