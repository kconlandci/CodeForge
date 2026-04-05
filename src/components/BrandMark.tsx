import { Code } from "lucide-react";

const SIZE_MAP = {
  sm: {
    wrapper: "w-10 h-10 rounded-xl",
    icon: 20,
  },
  md: {
    wrapper: "w-14 h-14 rounded-2xl",
    icon: 28,
  },
  lg: {
    wrapper: "w-20 h-20 rounded-[1.75rem]",
    icon: 40,
  },
} as const;

type BrandMarkSize = keyof typeof SIZE_MAP;

interface BrandMarkProps {
  size?: BrandMarkSize;
  className?: string;
}

export default function BrandMark({
  size = "md",
  className = "",
}: BrandMarkProps) {
  const config = SIZE_MAP[size];

  return (
    <div
      className={[
        "flex items-center justify-center bg-rose-500/20 text-rose-400 ring-1 ring-rose-400/20 shadow-[0_0_24px_rgba(244,63,94,0.18)]",
        config.wrapper,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Code size={config.icon} />
    </div>
  );
}
