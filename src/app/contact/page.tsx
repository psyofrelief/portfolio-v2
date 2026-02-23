import ContactForm from "@/components/form/ContactForm";
import Heading from "@/components/ui/Heading";
import Headline from "@/components/ui/Headline";
import { WorldClocks } from "@/components/WorldClocks";

export default function Contact() {
  return (
    <div
      data-theme="dark"
      className="text-foreground bg-background grid h-screen grid-cols-2 pt-12 pb-0!"
    >
      <div className="bg-outline absolute top-12 right-0 left-0 h-px w-full" />
      <div className="p-md flex flex-col items-center justify-between">
        {/* left */}
        <div className="gap-y-sm flex flex-col items-center">
          <Heading label="Info" />
          <ul className="flex flex-col items-center">
            <li>
              <a href="mailto:info@faried.net" rel="noreferrer" target="_blank">
                info@faried.net
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/faried-idris"
                rel="noreferrer"
                target="_blank"
              >
                /in/faried-idris
              </a>
            </li>
          </ul>
        </div>
        <WorldClocks />
      </div>

      {/* right */}
      <div className="border-l-outline p-md gap-y-2xl flex flex-col border-l">
        <header className="gap-y-xs flex flex-col">
          <Headline>Let’s build something scalable</Headline>
          <p className="text-foreground-secondary">
            Currently open to new engineering opportunities and creative
            collaborations.
          </p>
        </header>
        <ContactForm />
      </div>
    </div>
  );
}
