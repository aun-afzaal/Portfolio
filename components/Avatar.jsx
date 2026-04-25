"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Avatar = () => {
  const searchParams = useSearchParams();
  const showAun = searchParams.get("aun") === "true";

  const src = showAun
    ? "https://www.abcodify.com/aun.png"
    : "/avatar-new.png";

  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src={src}
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;