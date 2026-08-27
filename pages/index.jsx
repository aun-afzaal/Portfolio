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
        {/* Core Primary Meta Tags */}
        <title>
          Muhammad Aun – Full-Stack Software Engineer & System Architect
        </title>
        <meta
          name="description"
          content="Muhammad Aun is a Full-Stack Software Engineer specializing in scalable microservices, high-concurrency web applications, MERN stack, Next.js, and cloud architecture (AWS/Docker)."
        />
        <meta
          name="keywords"
          content="Muhammad Aun, Full Stack Engineer, Software Architect, React, Next.js, Node.js, NestJS, TypeScript, Microservices, REST APIs, GraphQL, AWS, Docker, CI/CD, Cloud Native, Web Performance Optimization, Lahore Pakistan"
        />
        <meta name="author" content="Muhammad Aun" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://aun.abcodify.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aun.abcodify.com" />
        <meta property="og:site_name" content="Muhammad Aun" />
        <meta property="og:locale" content="en_PK" />
        <meta
          property="og:title"
          content="Muhammad Aun – Full-Stack Software Engineer"
        />
        <meta
          property="og:description"
          content="Architecting resilient microservices, high-throughput SaaS platforms, and modern web applications with Next.js, TypeScript, and AWS."
        />
        <meta
          property="og:image"
          content="https://aun.abcodify.com/android-chrome-512x512.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Muhammad Aun favicon" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Muhammad Aun – Full-Stack Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Production-grade web apps, cloud-native backend systems, and high-performance user interfaces."
        />
        <meta
          name="twitter:image"
          content="https://aun.abcodify.com/android-chrome-512x512.png"
        />
        <meta name="twitter:image:alt" content="Muhammad Aun favicon" />

        {/* JSON-LD Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Aun",
              jobTitle: "Software Engineer",
              url: "https://aun.abcodify.com",
              sameAs: [
                "https://github.com/aun-afzaal",
                "https://linkedin.com/in/aun-afzaal",
              ],
              knowsAbout: [
                "Software Engineering",
                "Full-Stack Development",
                "System Architecture",
                "React",
                "Next.js",
                "Node.js",
                "NestJS",
                "TypeScript",
                "Docker",
                "AWS",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Simulalab",
              },
            }),
          }}
        />

        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
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
            className="hero-content container mx-auto"
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
              <SectionLabel>Full-Stack Engineer · Cloud & DevOps</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeIn("down", 0.25)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
              style={{ maxWidth: "720px" }}
            >
              Architecting <span className="text-accent">Scalable</span>
              <br />
              Enterprise Systems
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
              style={{ maxWidth: "560px", marginBottom: "2.5rem" }}
            >
              I’m Muhammad Aun — a Full-Stack Engineer specializing in modern
              JavaScript/TypeScript ecosystems (React, Next.js, Node.js,
              NestJS). I design resilient backend microservices, high-throughput
              REST/GraphQL APIs, and cloud-native web architectures engineered
              for performance and reliability.
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

      {/* ══════════════ SERVICES ══════════════ */}
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
            <div className="space-y-8">
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
                    Looking to scale an existing system, engineer a cloud-native
                    SaaS product, or optimize your application's Core Web
                    Vitals? Let's discuss your tech stack and requirements.
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
                    value: "dev.aunafzaal@gmail.com",
                    href: "mailto:dev.aunafzaal@gmail.com",
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
            <Contact />
          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer id="footer" className="text-center bg-[var(--navy-900)]">
        © 2026{" "}
        <a
          href="/?aun=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muhammad Aun
        </a>
        . All rights reserved.
      </footer>
    </>
  );
}
