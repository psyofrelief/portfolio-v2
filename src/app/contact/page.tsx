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
      <div className="p-md gap-y-xl flex flex-col items-center justify-center">
        {/* left */}
        <header className="gap-y-xs flex flex-col items-center text-center">
          <Headline>Let’s build something scalable</Headline>
          <p className="text-foreground-secondary max-w-100">
            Currently open to new engineering opportunities and creative
            collaborations. Get in touch and let`s talk
          </p>
        </header>
        <WorldClocks />
      </div>

      {/* right */}
      <div className="border-l-outline p-md gap-y-2xl flex flex-col border-l">
        <ContactForm />
      </div>
    </div>
  );
}
