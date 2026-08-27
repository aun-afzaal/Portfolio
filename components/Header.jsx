import Image from "next/image";
import Link from "next/link";
import { Button, Tooltip } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
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
        position: "fixed",
        top: 0,
        zIndex: 40,
        width: "100%",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(5,15,30,0.82)",
        borderBottom: "1px solid var(--navy-500)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="flex flex-col lg:flex-row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            paddingBlock: "0.75rem",
          }}
        >
          {/* Logo */}
          <div className="flex min-w-0 items-center justify-between gap-3 w-full">
            <Link href="/#home" style={{ flexShrink: 1, minWidth: 0 }}>
              <Image
                src="/logo.svg"
                className="w-[clamp(116px,18vw,200px)]"
                alt="Muhammad Aun – Software Engineer"
                width={200}
                height={44}
                priority
              />
            </Link>
            <Tooltip title="Resume">
              <Button type="primary" shape="round" icon={<DownloadOutlined />} onClick={handleResumeDownload} className="resume-button">
                <span className="hidden sm:inline">Resume</span>
              </Button>
            </Tooltip>
          </div>

          {/* Right: Resume + Socials */}
          <div className="w-full overflow-x-auto pb-1 lg:w-auto lg:overflow-visible" style={{ display: "flex", alignItems: "center" }}>
            {/* Resume button */}
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
