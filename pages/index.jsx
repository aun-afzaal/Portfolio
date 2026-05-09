import { motion } from "framer-motion";
import Head from "next/head";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Circles from "../components/Circles";
import SectionLabel from "../components/SectionLabel";
import { fadeIn } from "../variants";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Services from "../components/Services";
import About from "../components/About";
import Work from "../components/Work";

/* ═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Aun – Software Engineer | Full-Stack Developer</title>
        <meta
          name="description"
          content="Muhammad Aun is a Software Engineer specialising in React, Next.js, Node.js and NestJS. Building modern, scalable web applications."
        />
        <meta
          name="keywords"
          content="Muhammad Aun, Software Engineer, Full-Stack Developer, React, Next.js, Node.js, NestJS, Lahore, Pakistan"
        />
        <meta name="author" content="Muhammad Aun" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Muhammad Aun – Software Engineer" />
        <meta
          property="og:description"
          content="Scalable full-stack applications · SaaS platforms · Real-time systems"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Aun – Software Engineer" />
        <meta
          name="twitter:description"
          content="Scalable full-stack applications built with React, Next.js and Node.js"
        />
        <link rel="canonical" href="https://aun.abcodify.com" />
      </Head>

      {/* ══════════════ HERO ══════════════ */}
      <section
        id="home"
        style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
      >
        <div
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(to right, rgba(5,15,30,0.95) 40%, rgba(5,15,30,0.3))",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="container mx-auto"
            style={{
              paddingTop: "6rem",
              paddingBottom: "4rem",
              textAlign: "left",
            }}
          >
            <motion.div
              variants={fadeIn("down", 0.15)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
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
              Building <span className="text-accent">Modern</span>
              <br />
              Web Experiences
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

            <motion.div
              variants={fadeIn("down", 0.45)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>

        {/* Particles */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
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
            height: "70%",
            pointerEvents: "none",
          }}
        >
          <Avatar />
        </motion.div>
      </section>

      {/* ══════════════ Services ══════════════ */}

      <section id="services" className="overflow-hidden">
        <Services />
      </section>

      {/* ══════════════ ABOUT ══════════════ */}
      <section id="about">
        <About />
      </section>

      {/* ══════════════ WORK ══════════════ */}
      <section id="work" className="overflow-hidden">
        <Work />
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section id="testimonials">
        <Testimonials />
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

        <div
          className="container mx-auto flex gap-20 lg:flex-row flex-col"
          style={{ width: "100%" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            className="xl:flex-row xl:items-start xl:gap-x-16 w-full"
          >
            <div>
              {/* Left */}
              <div style={{ flexShrink: 0, maxWidth: "380px" }}>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <SectionLabel>Get in touch</SectionLabel>
                  <h2 className="h2">
                    Let's <span className="text-accent">connect.</span>
                  </h2>
                  <p>
                    Have a project in mind or want to discuss opportunities? I'm
                    always open to collaborating on interesting challenges and
                    building impactful products.
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
                  {
                    label: "Email",
                    value: "codewithaun@gmail.com",
                    href: "mailto:codewithaun@gmail.com",
                  },
                  {
                    label: "Phone",
                    value: "+92 336 1484463",
                    href: "tel:+923361484463",
                  },
                  { label: "Location", value: "Lahore, Pakistan", href: null },
                  {
                    label: "GitHub",
                    value: "github.com/aun-afzaal",
                    href: "https://github.com/aun-afzaal",
                  },
                ].map(({ label, value, href }) => (
                  <div key={label} className="contact-card">
                    <div className="contact-card__label">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="contact-card__value"
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        className="contact-card__value"
                        style={{ cursor: "default" }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="w-full">
            {" "}
            <Contact />
          </div>
        </div>
      </section>

      {/* --------Footer-------------- */}

      <section id="footer" className="text-center bg-[var(--navy-600)]">
        © 2026 Muhammad Aun. All rights reserved.
      </section>
    </>
  );
}
