"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

export default function FadeInImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-muted relative overflow-hidden">
      <Image
        {...props}
        alt="Project image"
        onLoad={(e) => {
          setLoaded(true);
          if (props.onLoad) props.onLoad(e);
        }}
        className={`transition-all duration-700 ease-in-out ${
          props.className ?? ""
        } ${loaded ? "blur-0 opacity-100" : "scale-105 opacity-0 blur-xl"}`}
      />
    </div>
  );
}
