"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      if (!active) setActive(true);

      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[role=button], a, button");
      const isPointer =
        getComputedStyle(target).cursor === "pointer" || !!interactiveEl;

      const text =
        target
          .closest("[data-cursor-text]")
          ?.getAttribute("data-cursor-text") || "";
      setCursorText(text);

      // Position update
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Visual logic
      if (text) {
        // Pill Shape
        cursor.style.width = "auto";
        cursor.style.height = "20px";
        cursor.style.padding = "0 8px";
        cursor.style.borderRadius = "10px";
        cursor.style.transform = "translate3d(-50%, -50%, 0) scale(1)";
      } else if (isPointer) {
        // Big Circle
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursor.style.padding = "0";
        cursor.style.borderRadius = "50%";
        cursor.style.transform = "translate3d(-50%, -50%, 0) scale(2.5)";
      } else {
        // Small Dot
        cursor.style.width = "24px";
        cursor.style.height = "24px";
        cursor.style.padding = "0";
        cursor.style.borderRadius = "50%";
        cursor.style.transform = "translate3d(-50%, -50%, 0) scale(0.25)";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [active]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-9999 hidden items-center justify-center bg-white text-xs font-bold tracking-tight text-black uppercase mix-blend-difference transition-[transform,width,height,border-radius,opacity] duration-200 ease-out will-change-[transform,width,height] sm:flex ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="leading-none whitespace-nowrap">{cursorText}</span>
    </div>
  );
}
