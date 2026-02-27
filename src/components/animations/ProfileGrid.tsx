"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProfileGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".profile-data-box", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: gridRef },
  );

  return (
    <div ref={gridRef} className="gap-md grid grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}
