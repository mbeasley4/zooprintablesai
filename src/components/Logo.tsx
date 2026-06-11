import Image from "next/image";

const ASPECT = 1164 / 347;

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "full" | "icon";
  onDark?: boolean;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  const height = size;
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src="/images/zpa-logo.svg"
      alt="Zoo Printables AI"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
