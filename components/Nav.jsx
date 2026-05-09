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
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, path) => {
    e.preventDefault();
    const id = path.split("#")[1];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
          gap: "20px",
          background: "rgba(5,15,30,0.82)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "1px solid var(--navy-500)",
          padding: "0.75rem 1.5rem",
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
              className="group hover:text-accent"
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
