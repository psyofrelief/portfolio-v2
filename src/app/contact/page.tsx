import ContactForm from "@/components/form/ContactForm";
import Heading from "@/components/ui/Heading";
import Headline from "@/components/ui/Headline";
import { WorldClocks } from "@/components/WorldClocks";

export default function Contact() {
  return (
    <div
      data-theme="dark"
      className="text-foreground bg-background grid h-screen grid-cols-1 pt-12 pb-0! sm:grid-cols-2"
    >
      <div className="bg-outline absolute top-12 right-0 left-0 h-px w-full" />
      <div className="sm:px-md px-sm py-xl sm:py-md gap-y-xl flex flex-col sm:items-center sm:justify-center">
        {/* left */}
        <header className="gap-y-xs flex flex-col sm:items-center sm:text-center">
          <Headline>Let’s build something scalable</Headline>
          <p className="text-foreground-secondary max-w-80 sm:max-w-100">
            Currently open to new engineering opportunities and creative
            collaborations. Get in touch and let`s talk
          </p>
        </header>
        <WorldClocks />
      </div>

      {/* right */}
      <div className="border-l-outline sm:px-md px-sm py-md gap-y-2xl flex flex-col sm:border-l">
        <ContactForm />
      </div>
    </div>
  );
}
