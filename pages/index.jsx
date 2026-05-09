import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import Head from "next/head";
import {
  FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress,
} from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd, SiFramer, SiNextdotjs } from "react-icons/si";

import ParticlesContainer  from "../components/ParticlesContainer";
import ProjectsBtn         from "../components/ProjectsBtn";
import Avatar              from "../components/Avatar";
import Circles             from "../components/Circles";
import Bulb                from "../components/Bulb";
import ServiceSlider       from "../components/ServiceSlider";
import WorkSlider          from "../components/WorkSlider";
import TestimonialSlider   from "../components/TestimonialSlider";
import { fadeIn }          from "../variants";

/* ─── Data ────────────────────────────────────────────────── */
const aboutData = [
  {
    title: "profile",
    info: [
      { title: "Name",     stage: "Muhammad Aun · Software Engineer" },
      { title: "Location", stage: "Lahore, Punjab, Pakistan" },
      { title: "Email",    stage: "codewithaun@gmail.com" },
      { title: "Phone",    stage: "+92 336 1484463" },
    ],
  },
  {
    title: "skills",
    info: [
      { title: "Web Development",  icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiFramer, FaWordpress] },
      { title: "Backend & Tools",  icons: [SiNextdotjs, FaReact, FaJs] },
      { title: "UI/UX & Design",   icons: [FaFigma, SiAdobexd, SiAdobephotoshop] },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Software Engineer – Simula Lab (UK)",         stage: "2025 – Present" },
      { title: "Business Data Analyst – Excellence Delivered", stage: "2025" },
      { title: "Web Developer – AccellionX",                   stage: "2023 – 2025" },
    ],
  },
  {
    title: "education",
    info: [
      { title: "BS Information Technology – University of Punjab", stage: "2019 – 2024" },
      { title: "FSc Pre-Engineering – Punjab Group of Colleges",    stage: "2017 – 2019" },
      { title: "Matriculation – Islamia Public School",             stage: "2015 – 2017" },
    ],
  },
];

/* ─── Shared section-header style ─────────────────────────── */
const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: "0.65rem",
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "var(--accent-400)",
      fontWeight: 700,
      marginBottom: "0.75rem",
    }}
  >
    {children}
  </p>
);

/* ═══════════════════════════════════════════════════════════ */
export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Muhammad Aun – Software Engineer | Full-Stack Developer</title>
        <meta name="description" content="Muhammad Aun is a Software Engineer specialising in React, Next.js, Node.js and NestJS. Building modern, scalable web applications." />
        <meta name="keywords"    content="Muhammad Aun, Software Engineer, Full-Stack Developer, React, Next.js, Node.js, NestJS, Lahore, Pakistan" />
        <meta name="author"      content="Muhammad Aun" />
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="Muhammad Aun – Software Engineer" />
        <meta property="og:description" content="Scalable full-stack applications · SaaS platforms · Real-time systems" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Muhammad Aun – Software Engineer" />
        <meta name="twitter:description" content="Scalable full-stack applications built with React, Next.js and Node.js" />
        <link rel="canonical" href="https://codewithaun.com" />
      </Head>

      {/* ══════════════ HERO ══════════════ */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(to right, rgba(5,15,30,0.95) 40%, rgba(5,15,30,0.3))",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="container mx-auto"
            style={{ paddingTop: "6rem", paddingBottom: "4rem", textAlign: "left" }}
          >
            <motion.div variants={fadeIn("down", 0.15)} initial="hidden" animate="show" exit="hidden">
              <SectionLabel>Software Engineer · Pakistan</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeIn("down", 0.25)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
              style={{ maxWidth: "680px" }}
            >
              Building{" "}
              <span className="text-accent">Modern</span>
              <br />Web Experiences
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
              style={{ maxWidth: "520px", marginBottom: "2.5rem" }}
            >
              I'm Muhammad Aun — a full-stack engineer specialising in React,
              Next.js, Node.js and NestJS. I build fast, scalable, SEO-optimised
              web applications and SaaS products that make a real-world impact.
            </motion.p>

            <motion.div variants={fadeIn("down", 0.45)} initial="hidden" animate="show" exit="hidden">
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>

        {/* Particles */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <ParticlesContainer />
        </div>

        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: 0,
            right: "6%",
            width: "100%",
            maxWidth: "640px",
            height: "90%",
            pointerEvents: "none",
          }}
        >
          <Avatar />
        </motion.div>
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          paddingBlock: "6rem",
          background: "var(--navy-800)",
        }}
      >
        <Circles />

        <div className="container mx-auto" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {/* Left: headline + counters */}
          <div style={{ flex: 1 }}>
            <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <SectionLabel>About me</SectionLabel>
              <h2 className="h2">
                Building <span className="text-accent">scalable</span> products
                <br />with modern engineering.
              </h2>
              <p style={{ maxWidth: "480px", marginBottom: "2.5rem" }}>
                Software Engineer with experience building full-stack applications using
                React, Node.js, NestJS, and PostgreSQL. I've shipped production systems —
                SaaS platforms, marketplaces, KYC flows, real-time apps — serving 1000+
                users. Focused on performance, scalability, and clean architecture.
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
                { end: 3,    suffix: "+", label: "Years experience" },
                { end: 3,    suffix: "",  label: "Companies worked with" },
                { end: 15,   suffix: "+", label: "Projects shipped" },
                { end: 1000, suffix: "+", label: "Users served" },
              ].map(({ end, suffix, label }, i) => (
                <div
                  key={i}
                  className="counter-divider"
                  style={{ flex: "1 1 110px", paddingRight: i < 3 ? "2rem" : 0 }}
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
                    <CountUp start={0} end={end} duration={3} />{suffix}
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

          {/* Right: tab panel */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ flex: "0 0 auto", width: "100%", maxWidth: "520px" }}
          >
            {/* Tabs */}
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              {aboutData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setTabIndex(i)}
                  className={`tab-item${tabIndex === i ? " active" : ""}`}
                  style={{ background: "none", border: "none", padding: 0, font: "inherit", cursor: "pointer" }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
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
                  <span style={{ color: "var(--white-200)", fontWeight: 500, fontSize: "0.9rem" }}>
                    {item.title}
                  </span>
                  {item.stage && (
                    <>
                      <span style={{ color: "var(--navy-500)" }}>–</span>
                      <span style={{ color: "var(--white-300)", fontSize: "0.875rem" }}>{item.stage}</span>
                    </>
                  )}
                  {item.icons && (
                    <div style={{ display: "flex", gap: "0.75rem", marginLeft: "auto" }}>
                      {item.icons.map((Icon, ii) => (
                        <Icon key={ii} style={{ fontSize: "1.4rem", color: "var(--white-200)" }} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section
        id="services"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          paddingBlock: "6rem",
          background: "var(--navy-900)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Circles />
        <Bulb />

        <div className="container mx-auto" style={{ width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }} className="xl:flex-row xl:items-start xl:gap-x-12">
            {/* Left */}
            <div style={{ flexShrink: 0, maxWidth: "360px" }}>
              <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <SectionLabel>What I offer</SectionLabel>
                <h2 className="h2">
                  My services<span className="text-accent"> .</span>
                </h2>
                <p>
                  Full-stack digital products — SaaS platforms, marketplaces, real-time
                  systems, and enterprise dashboards. Scalable architecture, clean
                  engineering, modern technologies.
                </p>
              </motion.div>
            </div>

            {/* Right: slider */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ flex: 1, minWidth: 0 }}
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ WORK ══════════════ */}
      <section
        id="work"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          paddingBlock: "6rem",
          background: "var(--navy-800)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Circles />

        <div className="container mx-auto" style={{ width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }} className="xl:flex-row xl:items-start xl:gap-x-12">
            {/* Left */}
            <div style={{ flexShrink: 0, maxWidth: "360px" }}>
              <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <SectionLabel>Portfolio</SectionLabel>
                <h2 className="h2">
                  My work<span className="text-accent"> .</span>
                </h2>
                <p>
                  Production systems, SaaS platforms, and digital products built with
                  modern technologies — each demonstrating real-world problem-solving
                  and scalable engineering.
                </p>
              </motion.div>
            </div>

            {/* Right: slider */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{ flex: 1, minWidth: 0 }}
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section
        id="testimonials"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          paddingBlock: "6rem",
          background: "var(--navy-900)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "1rem" }}
          >
            <SectionLabel>Client feedback</SectionLabel>
            <h2 className="h2">
              What clients <span className="text-accent">say.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <TestimonialSlider />
          </motion.div>
        </div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section
        id="contact"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          paddingBlock: "6rem",
          background: "var(--navy-800)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Circles />

        <div className="container mx-auto" style={{ width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }} className="xl:flex-row xl:items-start xl:gap-x-16">
            {/* Left */}
            <div style={{ flexShrink: 0, maxWidth: "380px" }}>
              <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <SectionLabel>Get in touch</SectionLabel>
                <h2 className="h2">
                  Let's <span className="text-accent">connect.</span>
                </h2>
                <p>
                  Have a project in mind or want to discuss opportunities? I'm always open
                  to collaborating on interesting challenges and building impactful products.
                </p>
              </motion.div>
            </div>

            {/* Right: contact cards */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[
                { label: "Email",    value: "codewithaun@gmail.com", href: "mailto:codewithaun@gmail.com" },
                { label: "Phone",    value: "+92 336 1484463",       href: "tel:+923361484463" },
                { label: "Location", value: "Lahore, Pakistan",      href: null },
                { label: "GitHub",   value: "github.com/aun-afzaal", href: "https://github.com/aun-afzaal" },
              ].map(({ label, value, href }) => (
                <div key={label} className="contact-card">
                  <div className="contact-card__label">{label}</div>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-card__value">
                      {value}
                    </a>
                  ) : (
                    <span className="contact-card__value" style={{ cursor: "default" }}>{value}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
