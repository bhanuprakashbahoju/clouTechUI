import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.03), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export function BackgroundGradient({
  children,
  className = "",
  containerClassName = "",
  animate = true,
}: BackgroundGradientProps) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={`relative p-[1px] group ${containerClassName}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className="absolute inset-0 rounded-2xl z-[1] opacity-50 group-hover:opacity-100 blur-sm transition duration-500 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"
      />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}

interface GlowingBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingBorderCard({ children, className = "" }: GlowingBorderCardProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
      <div className={`relative bg-white rounded-2xl ${className}`}>{children}</div>
    </div>
  );
}

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  className = "",
  containerClassName = "",
  borderClassName = "",
}: MovingBorderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-transparent p-[1px] rounded-2xl ${containerClassName}`}
    >
      <div
        className={`absolute inset-0 rounded-2xl ${borderClassName}`}
        style={{
          background: `linear-gradient(var(--angle, 0deg), #000, #666, #000)`,
          animation: `spin ${duration}ms linear infinite`,
        }}
      />
      <div className={`relative bg-white rounded-2xl ${className}`}>{children}</div>
      <style>{`
        @keyframes spin {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
    </div>
  );
}

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
}

export function TextShimmer({ children, className = "" }: TextShimmerProps) {
  return (
    <span
      className={`inline-flex animate-shimmer bg-[linear-gradient(110deg,#000,45%,#666,55%,#000)] bg-[length:200%_100%] text-transparent bg-clip-text ${className}`}
    >
      {children}
    </span>
  );
}
