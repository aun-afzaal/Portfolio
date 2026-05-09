import Link from "next/link";
import Image from "next/image";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterXLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/aun_afzaal",
    Icon: RiInstagramLine,
    bg: "bg-[#E4405F] hover:bg-[#d12f4f]",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/itx.AunAfzaal",
    Icon: RiFacebookLine,
    bg: "bg-[#1877F2] hover:bg-[#0f66d6]",
  },
  {
    name: "Twitter (X)",
    link: "https://www.x.com/AunAfzaal",
    Icon: RiTwitterXLine,
    bg: "bg-black hover:bg-neutral-900",
  },
  {
    name: "GitHub",
    link: "https://github.com/aun-afzaal",
    Icon: RiGithubLine,
    bg: "bg-[#24292F] hover:bg-black",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/AunAfzaal",
    Icon: RiLinkedinLine,
    bg: "bg-[#0A66C2] hover:bg-[#084b8a]",
  },
  {
    name: "Abcodify",
    link: "https://abcodify.com",
    Icon: null,
    bg: "bg-[#0f1e35] hover:bg-[#050c1a]",
    logo: "https://abcodify.com/favicon.svg",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-4 text-xl">
      {socialData.map((social, i) => (
        <Link
          key={i}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
          className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 ${social.bg}`}
        >
          {/* Icon */}
          {social.Icon && <social.Icon className="text-white text-2xl" />}

          {/* Abcodify logo */}
          {social.logo && (
            <Image
              loading="lazy"
              src={social.logo}
              alt={social.name}
              width={28}
              height={28}
            />
          )}

          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
