import Section from "@/components/shared/Section";
import Headline from "@/components/ui/Headline";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="bg-background text-foreground flex" data-theme="dark">
      <Section
        topSection
        data-theme="dark"
        className="bg-background text-foreground gap-y-md mx-auto flex w-full max-w-250 flex-col font-light"
      >
        <header className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <Headline className="font-bold">Terms of Service</Headline>
            <p className="text-foreground-secondary">
              Last updated: February 27, 2026
            </p>
          </div>
          <p className="">
            These Terms of Service (“Terms”) govern your access to and use of
            services provided by Faried Idris (“I”, “me”, or “my”). By engaging
            with my services, you agree to be bound by these Terms.
          </p>
        </header>

        <div className="flex flex-col gap-y-4">
          <Headline>Services</Headline>
          <p>
            I offer web design, development, digital branding, and custom
            software solutions. Scope, pricing, and timelines are defined in a
            written agreement before any work begins.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Payments</Headline>
          <p>
            All projects require full or partial payment upfront, as outlined in
            the agreement. Late or missed payments may incur a 5% fee. Work may
            be paused until payment is received.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Cancellations and Refunds</Headline>
          <p>
            You may cancel a project at any time. However, payments already made
            are non-refundable. Revisions are included where agreed upon, but
            refunds are not offered once work has been completed.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Intellectual Property</Headline>
          <p>
            Upon full payment, all rights to final deliverables are transferred
            to you. I reserve the right to showcase completed work in my
            portfolio or marketing materials, unless agreed otherwise.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Hosting and Maintenance</Headline>
          <p>
            I offer optional hosting and paid maintenance plans. Basic updates
            (such as software dependency updates) are included at no charge for
            active maintenance clients.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Limitation of Liability</Headline>
          <p>
            I am not liable for any damages or losses resulting from use of my
            services, including delays, technical issues, or third party service
            failures.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <Headline>Contact</Headline>
          <p>For questions or concerns regarding these terms, reach out to:</p>
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
            I reserve the right to update these Terms at any time. By continuing
            to use my services, you agree to any revised terms.
          </p>
        </footer>
      </Section>
    </div>
  );
}
