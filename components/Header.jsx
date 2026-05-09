import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Socials from "../components/Socials";

const Header = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/aun.pdf";
    link.download = "Muhammad_Aun_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        width: "100%",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(5,15,30,0.82)",
        borderBottom: "1px solid var(--navy-500)",
      }}
    >
      <div className="container mx-auto">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingBlock: "1.25rem",
          }}
        >
          {/* Logo */}
          <Link href="/#home" style={{ flexShrink: 0 }}>
            <Image
              src="/logo.svg"
              alt="Muhammad Aun – Software Engineer"
              width={200}
              height={44}
              priority
              style={{ width: "clamp(140px, 18vw, 200px)", height: "auto", filter: "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Right: Resume + Socials */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {/* Resume button */}
            <motion.button
              onClick={handleResumeDownload}
              className="btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ whiteSpace: "nowrap", gap: "0.5rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </motion.button>

            {/* Socials */}
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
