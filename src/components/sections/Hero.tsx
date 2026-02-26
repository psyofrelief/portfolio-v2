import BouncingImage from "../BouncingImage";
import Logo from "../shared/Logo";
import Section from "../shared/Section";

export default function Hero() {
  return (
    <Section className="pb-sm! relative flex min-h-screen items-end pt-19.5!">
      <Logo className="z-3 fill-white mix-blend-difference" />

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
