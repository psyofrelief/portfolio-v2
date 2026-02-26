"use client";
import { useMenuContext } from "@/contexts/menuContext";

export default function MenuTrigger() {
  const { menuOpen, toggleMenu } = useMenuContext();

  return (
    <button
      onClick={toggleMenu}
      type="button"
      tabIndex={0}
      aria-label="Menu trigger"
      className="block text-xs uppercase sm:hidden"
    >
      {menuOpen ? "Close" : "Menu"}
    </button>
  );
}
