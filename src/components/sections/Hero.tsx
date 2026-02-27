import HeroFade from "../animations/HeroFade";
import BouncingImage from "../BouncingImage";
import Logo from "../shared/Logo";
import Section from "../shared/Section";

export default function Hero() {
  return (
    <Section className="pb-sm! relative flex min-h-dvh items-end pt-19.5!">
      <div className="left-sm md:top-sm absolute top-1/2 z-1 flex -translate-y-1/2 flex-col text-xs leading-tight md:left-1/2 md:-translate-x-1/2 md:translate-y-0">
        <p className="max-w-65">Full Stack Engineer / Graphic Designer</p>
        <p className="text-foreground-secondary max-w-65">
          Experience delivering technical solutions from brand identity to
          complex system integrations.
        </p>
      </div>

      <HeroFade>
        <Logo className="fill-white" />
      </HeroFade>

      <div className="absolute inset-0 size-full">
        <BouncingImage
          images={[
            "/images/playground/preview/1.webp",
            "/images/playground/preview/2.webp",
            "/images/playground/preview/3.webp",
            "/images/playground/preview/4.webp",
          ]}
        />
      </div>
    </Section>
  );
}
