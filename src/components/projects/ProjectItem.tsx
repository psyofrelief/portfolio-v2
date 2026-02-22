import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  shortDesc: string;
  cover: string;
}

export default function ProjectItem({ name, shortDesc, id, cover }: Props) {
  const href = `/works/${id}`;

  return (
    <li className="gap-y-xs flex flex-col">
      <Link href={href}>
        {/*<Image src={cover} width={1000} height={720} alt={name} /> */}
        <div className="aspect-4/5 size-full bg-black/20" />
      </Link>

      <div className="grid grid-cols-2 leading-none">
        <h3>{name}</h3>
        <p className="text-foreground-secondary">{shortDesc}</p>
      </div>
    </li>
  );
}
