"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FooterReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".footer-link-box", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        stagger: 0.15,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  return (
    <footer
      ref={container}
      className="sm:px-md px-sm text-foreground fill-foreground sm:pt-lg pt-md gap-xl sm:gap-md pb-sm bg-background relative flex w-full flex-col justify-between sm:min-h-241"
    >
      {children}
    </footer>
  );
}
