import Section from "@/components/shared/Section";
import Headline from "@/components/ui/Headline";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-background text-foreground flex" data-theme="dark">
      <Section
        topSection
        data-theme="dark"
        className="bg-background text-foreground gap-y-md mx-auto flex w-full max-w-250 flex-col font-light"
      >
        <header className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <Headline className="font-bold">Privacy Policy</Headline>
            <p className="text-foreground-secondary">
              Last updated: February 27, 2026
            </p>
          </div>
          <p>
            Faried Idris (“I”, “me”, or “my”) respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how I collect, use, and safeguard your data when you
            interact with my portfolio website and services.
          </p>
        </header>

        <div className="flex flex-col gap-y-4">
          <Headline>Information I Collect</Headline>
          <p>I may collect the following personal information:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Contact details:</strong> Your name and email address when
              you reach out via the contact form.
            </li>
            <li>
              <strong>Usage Data:</strong> Non personally identifiable data such
              as browser type and website usage statistics through analytics
              tools.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>How I Use Your Information</Headline>
          <p>
            I use this data solely to respond to your inquiries regarding
            potential projects or collaborations. I do not use your information
            for automated marketing or newsletter purposes unless explicitly
            requested.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Third Party Services</Headline>
          <p>
            I do not sell or share your data. However, certain information may
            be processed by trusted third party services like Web3Forms (for
            contact submissions) or Vercel (for hosting analytics) to ensure the
            site functions correctly.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Your Rights</Headline>
          <p>You have the right to:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Access, correct, or request the deletion of your personal data
            </li>
            <li>Object to or restrict the processing of your information</li>
            <li>Data portability for any information I hold</li>
          </ul>
          <p>
            To exercise these rights, please contact me via email. I will
            respond to all requests in accordance with applicable data
            protection laws.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Contact</Headline>
          <p>
            If you have questions regarding this policy or your personal data,
            you can reach me directly at:
          </p>
          <div className="flex flex-col gap-y-1">
            <p>
              Email:{" "}
              <Link href="mailto:info@faried.net" className="underline">
                info@faried.net
              </Link>
            </p>
            <p>
              GitHub:{" "}
              <Link href="https://github.com/psyofrelief" className="underline">
                @psyofrelief
              </Link>
            </p>
            <p>
              LinkedIn:{" "}
              <Link
                href="https://linkedin.com/in/faried-idris"
                className="underline"
              >
                /in/faried-idris
              </Link>
            </p>
          </div>
        </div>

        <footer className="border-outline border-t pt-10 text-sm opacity-70">
          <p>
            I reserve the right to update this policy at any time. Changes will
            be reflected on this page with an updated timestamp.
          </p>
        </footer>
      </Section>
    </div>
  );
}
