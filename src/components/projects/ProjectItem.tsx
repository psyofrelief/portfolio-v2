import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  shortDesc: string;
  cover: string;
  outline?: boolean;
  eagerLoad?: boolean;
}

export default function ProjectItem({
  name,
  shortDesc,
  id,
  cover,
  outline = false,
  eagerLoad = true,
}: Props) {
  const href = `/works/${id}`;

  return (
    <li data-cursor-text="View" className="gap-y-xs flex flex-col">
      <Link href={href}>
        <Image
          src={cover}
          width={1280}
          height={1920}
          loading={eagerLoad ? "eager" : "lazy"}
          priority={eagerLoad}
          alt={name}
          className={`rounded ${outline && "border-outline border"}`}
        />
      </Link>

      <div className="grid grid-cols-2 leading-none">
        <h3>{name}</h3>
        <p className="text-foreground-secondary">{shortDesc}</p>
      </div>
    </li>
  );
}
