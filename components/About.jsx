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

import Avatar from "./Avatar";
import SectionLabel from "./SectionLabel";
import Circles from "./Circles";
import { fadeIn } from "../variants";

//  data
const aboutData = [
  {
    title: "profile",
    info: [
      { title: "Name", stage: "Muhammad Aun · Software Engineer" },
      { title: "Location", stage: "Lahore, Punjab, Pakistan" },
      { title: "Email", stage: "codewithaun@gmail.com" },
      { title: "Phone", stage: "+92 336 1484463" },
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
      { title: "Backend & Tools", icons: [SiNextdotjs, FaReact, FaJs] },
      {
        title: "UI/UX & Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Software Engineer – Simula Lab (UK)", stage: "2025 – Present" },
      { title: "Business Data Analyst – Excellence Delivered", stage: "2025" },
      { title: "Web Developer – AccellionX", stage: "2023 – 2025" },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "BS Information Technology – University of Punjab",
        stage: "2019 – 2024",
      },
      {
        title: "FSc Pre-Engineering – Punjab Group of Colleges",
        stage: "2017 – 2019",
      },
      { title: "Matriculation – Islamia Public School", stage: "2015 – 2017" },
    ],
  },
];

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="bg-[var(--navy-900)] overflow-hidden xl:py-36 py-20 flex items-center w-full relative h-full">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[300px]"
      >
        <Avatar />
      </motion.div>

      <div
        className="container mx-auto"
        style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
        >
        {/* Left: headline + counters */}
        <div style={{ flex: 1 }}>
        <SectionLabel>About Me</SectionLabel>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* <SectionLabel>About me</SectionLabel> */}
            <h2 className="h2">
              Building <span className="text-accent">scalable</span> products
              <br />
              with modern engineering.
            </h2>
            <p style={{ marginBottom: "2.5rem" }}>
              Software Engineer with experience building full-stack applications
              using React, Node.js, NestJS, and PostgreSQL. I've shipped
              production systems — SaaS platforms, marketplaces, KYC flows,
              real-time apps — serving 1000+ users. Focused on performance,
              scalability, and clean architecture.
            </p>
          </motion.div>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}
          >
            {[
              { end: 3, suffix: "+", label: "Years experience" },
              { end: 3, suffix: "", label: "Companies worked with" },
              { end: 15, suffix: "+", label: "Projects shipped" },
              { end: 1000, suffix: "+", label: "Users served" },
            ].map(({ end, suffix, label }, i) => (
              <div
                key={i}
                className="counter-divider"
                style={{
                  flex: "1 1 110px",
                  paddingRight: i < 3 ? "2rem" : 0,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontWeight: 800,
                    color: "var(--accent-400)",
                    marginBottom: "0.25rem",
                    lineHeight: 1,
                  }}
                >
                  <CountUp start={0} end={end} duration={3} />
                  {suffix}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--white-300)",
                    maxWidth: "100px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ flex: "0 0 auto", width: "100%", maxWidth: "520px" }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {aboutData.map((item, i) => (
              <button
                key={i}
                onClick={() => setTabIndex(i)}
                className={`tab-item${tabIndex === i ? " active" : ""}`}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  font: "inherit",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {aboutData[tabIndex].info.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.5rem",
                  paddingBlock: "0.5rem",
                  borderBottom: "1px solid var(--navy-500)",
                }}
              >
                <span
                  style={{
                    color: "var(--white-200)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.title}
                </span>
                {item.stage && (
                  <>
                    <span style={{ color: "var(--navy-500)" }}>–</span>
                    <span
                      style={{
                        color: "var(--white-300)",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.stage}
                    </span>
                  </>
                )}
                {item.icons && (
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      marginLeft: "auto",
                    }}
                  >
                    {item.icons.map((Icon, ii) => (
                      <Icon
                        key={ii}
                        style={{
                          fontSize: "1.4rem",
                          color: "var(--white-200)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
