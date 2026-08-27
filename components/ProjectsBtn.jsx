import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("work")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div style={{ cursor: "pointer", margin: "0 auto" }} className="xl:mx-0">
      <button
        onClick={handleClick}
        style={{
          position: "relative",
          width: "185px",
          height: "185px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          backgroundImage: "url('/circle-star.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="View my work"
      >
        <Image
          src="/rounded-text.png"
          alt="View projects"
          width={141}
          height={148}
          style={{
            animation: "spin 6s linear infinite",
            width: "100%",
            height: "100%",
            maxWidth: "141px",
            maxHeight: "148px",
            /* Tint to match navy theme */
            filter: "hue-rotate(180deg) brightness(1.1)",
          }}
        />
        <HiArrowRight
          style={{
            position: "absolute",
            fontSize: "2rem",
            color: "var(--white-100)",
            transition: "transform var(--dur-base) var(--ease-out)",
          }}
          aria-hidden
        />
      </button>
    </div>
  );
};

export default ProjectsBtn;
