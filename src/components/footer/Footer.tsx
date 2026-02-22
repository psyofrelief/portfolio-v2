import Footerlink from "./FooterLink";
import { FOOTER_LINKS } from "@/lib/constants/navigation";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="px-md sm:pt-lg pt-2xl gap-md pb-sm bg-muted relative flex w-full flex-col justify-between sm:min-h-241">
      <div className="gap-y-lg flex w-full flex-col justify-between sm:flex-row">
        <div className="flex flex-col">
          <p className="text-foreground-secondary">Get in touch with me</p>
          <a
            href="mailto:info@faried.net"
            rel="noreferrer"
            target="_blank"
            className="text-xl font-light"
          >
            ↳ info@faried.net
          </a>
        </div>
        <div className="gap-y-lg grid w-full max-w-3/5 grid-cols-1 justify-between sm:flex">
          {FOOTER_LINKS.map((e) => (
            <div key={e.category} className="gap-y-xs flex flex-col">
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
