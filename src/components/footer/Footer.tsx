"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footerlink from "./FooterLink";
import { FOOTER_LINKS } from "@/lib/constants/navigation";
import Logo from "../shared/Logo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
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
      <div className="gap-y-lg flex w-full flex-col justify-between sm:flex-row">
        {/* Contact Info */}
        <div className="flex flex-col">
          <p className="text-foreground-secondary">Get in touch with me</p>
          <a
            href="mailto:info@faried.net"
            className="hover:text-foreground-secondary text-xl font-light transition-colors"
          >
            ↳ info@faried.net
          </a>
        </div>

        <div className="gap-y-lg grid w-full max-w-3/5 grid-cols-1 justify-between sm:flex">
          {FOOTER_LINKS.map((e) => (
            <div
              key={e.category}
              className="footer-link-box reveal-mask gap-y-xs flex flex-col"
            >
              <h2 className="text-foreground-secondary text-xs uppercase">
                {e.category}
              </h2>
              <ul className="flex flex-col">
                {e.links.map((l, idx) => (
                  <Footerlink label={l.label} href={l.href} key={idx + 1} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Logo />
    </footer>
  );
}
