"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ValuesSection from "@/components/sections/ValuesSection";
import Section from "@/components/shared/Section";
import Heading from "@/components/ui/Heading";
import Headline from "@/components/ui/Headline";
import { ABOUT_PROFILE_DATA } from "@/lib/constants/about";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
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
    <>
      <Section
        data-theme="dark"
        className="text-foreground sm:gap-y-md gap-y-xl flex min-h-screen flex-col justify-between"
        topSection
      >
        <div className="gap-y-lg flex flex-col sm:flex-row sm:justify-between">
          <header className="gap-y-sm flex flex-col">
            <Heading label="About Me" />
            <Headline className="max-w-244">
              Faried has a keen eye for simple, gorgeous and dynamic user
              interfaces. He specialises in using modern frameworks to create
              online apps that are accessible and performant. He brings a
              meticulous approach to both programming and user experience,
              having worked in branding and design.
            </Headline>
          </header>

          <Image
            src="/images/about.webp"
            width={1280}
            loading="eager"
            priority
            height={1920}
            alt="image of self"
            className="sm:max-w-70"
          />
        </div>

        {/* Animation Target Grid */}
        <div ref={gridRef} className="gap-md grid grid-cols-2 lg:grid-cols-4">
          {ABOUT_PROFILE_DATA.map((group) => (
            <div
              key={group.category}
              className="profile-data-box reveal-mask gap-y-sm flex flex-col"
            >
              <h3 className="text-foreground-secondary text-xs uppercase">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Spacer to maintain "justify-between" layout if needed */}
        <div className="size-0" />
      </Section>

      <ValuesSection />
    </>
  );
}
