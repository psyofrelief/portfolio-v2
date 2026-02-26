"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnalogueClock from "./ui/AnalogueClock";

const CLOCKS = [
  { label: "Perth (Me)", zone: "Australia/Perth" },
  { label: "GMT", zone: "Europe/London" },
  { label: "UTC", zone: "UTC" },
];

export function WorldClocks() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".clock-item",
        {
          opacity: 0,
          y: 15,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.4,
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="gap-xl gap-x-xl hidden sm:flex">
      {CLOCKS.map((clock) => (
        <div
          key={clock.label}
          className="clock-item flex flex-col items-center"
        >
          <AnalogueClock timezone={clock.zone} />
          <p className="text-foreground-secondary mt-1 text-xs uppercase">
            {clock.label}
          </p>
        </div>
      ))}
    </div>
  );
}
