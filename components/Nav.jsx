import Link from "next/link";
import { useState, useEffect } from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "home",         path: "/#home",         icon: <HiHome /> },
  { name: "services",     path: "/#services",     icon: <HiRectangleGroup /> },
  { name: "about",        path: "/#about",        icon: <HiUser /> },
  { name: "work",         path: "/#work",         icon: <HiViewColumns /> },
  { name: "testimonials", path: "/#testimonials", icon: <HiChatBubbleBottomCenterText /> },
  { name: "contact",      path: "/#contact",      icon: <HiEnvelope /> },
];

const SECTIONS = navData.map((n) => n.path.split("#")[1]);

const Nav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    const hash = window.location.hash.slice(1).toLowerCase();
    const hashSection = SECTIONS.find(
      (id) => id === hash || (hash.length >= 3 && id.startsWith(hash))
    );
    if (hashSection) setActive(hashSection);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: [0.1, 0.3, 0.6] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e, path) => {
    e.preventDefault();
    const id = path.split("#")[1];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `/#${id}`);
    setActive(id);
  };

  return (
    <nav
      style={{
        position: "fixed",
        zIndex: 50,
        bottom: 0,
        right: 0,
      }}
      className="lg:w-100 w-full xl:bottom-auto xl:left-auto xl:right-[2%] xl:top-0 xl:w-16 xl:h-screen xl:flex xl:items-center xl:justify-center"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "0.5rem",
          background: "rgba(5,15,30,0.82)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid var(--navy-500)",
          padding: "0.7rem max(0.75rem, env(safe-area-inset-right)) calc(0.7rem + env(safe-area-inset-bottom)) max(0.75rem, env(safe-area-inset-left))",
          fontSize: "1.5rem",
        }}
        className="w-full xl:flex-col xl:justify-center xl:gap-y-8 xl:border-t-0 xl:border xl:border-[var(--navy-500)] xl:rounded-full xl:px-0 xl:py-8 xl:w-16 xl:text-xl"
      >
        {navData.map((link) => {
          const id = link.path.split("#")[1];
          const isActive = id === active;
          return (
            <Link
              key={id}
              href={link.path}
              onClick={(e) => scrollTo(e, link.path)}
              title={link.name}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: isActive ? "var(--accent-400)" : "var(--white-300)",
                transition: "color var(--dur-base) var(--ease-out)",
              }}
              aria-current={isActive ? "page" : undefined}
              className="group hover:text-accent min-w-10 min-h-10"
            >
              {/* Desktop tooltip */}
              <span
                className="hidden xl:group-hover:flex"
                style={{
                  position: "absolute",
                  right: "100%",
                  marginRight: "0.75rem",
                  background: "var(--white-100)",
                  color: "var(--navy-900)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-sm)",
                  whiteSpace: "nowrap",
                }}
              >
                {link.name}
                <span
                  style={{
                    position: "absolute",
                    left: "100%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "5px solid transparent",
                    borderLeftColor: "var(--white-100)",
                  }}
                />
              </span>

              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
