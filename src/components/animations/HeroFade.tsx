"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroFade({ children }: { children: React.ReactNode }) {
  const logoContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        logoContainer.current,
        { opacity: 0, y: 20, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    },
    { scope: logoContainer },
  );

  return (
    <div ref={logoContainer} className="z-3 w-full mix-blend-difference">
      {children}
    </div>
  );
}
