"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Trail {
  x: number;
  y: number;
  src: string;
}

interface BouncingState {
  x: number;
  y: number;
  velX: number;
  velY: number;
  width: number;
  height: number;
  imgIndex: number;
  moving: boolean; // Flag to track 1s delay
}

interface Props {
  images: string[];
}

const BouncingImage = ({ images }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dims, setDims] = useState({ width: 270, height: 480 });

  const state = useRef<BouncingState>({
    x: 0,
    y: 0,
    velX: 2,
    velY: 2,
    width: 270,
    height: 480,
    imgIndex: 0,
    moving: false,
  });

  useEffect(() => {
    if (!containerRef.current || !imgRef.current) return;

    const initFrame = requestAnimationFrame(() => {
      if (!containerRef.current || !imgRef.current) return;

      const { clientWidth, clientHeight } = containerRef.current;

      // Measure actual image
      const w = imgRef.current.offsetWidth || 270;
      const h = imgRef.current.offsetHeight || 480;

      // Update reactive state
      setDims({ width: w, height: h });

      // Calculate center
      const centerX = clientWidth / 2 - w / 2;
      const centerY = clientHeight / 2 - h / 2;

      state.current.x = centerX;
      state.current.y = centerY;
      state.current.width = w;
      state.current.height = h;

      setPos({ x: centerX, y: centerY });
      setIsInitialized(true);
    });

    const startTimeout = setTimeout(() => {
      state.current.moving = true;
    }, 1000);

    const animate = () => {
      if (!containerRef.current || !imgRef.current) return;

      const s = state.current;
      if (!s.moving) {
        requestAnimationFrame(animate);
        return;
      }

      const { clientWidth: cw, clientHeight: ch } = containerRef.current;

      // Keep state.current synced with DOM for physics
      s.width = imgRef.current.offsetWidth;
      s.height = imgRef.current.offsetHeight;

      let collided = false;

      if (s.x + s.width >= cw) {
        s.x = cw - s.width;
        s.velX *= -1;
        collided = true;
      } else if (s.x <= 0) {
        s.x = 0;
        s.velX *= -1;
        collided = true;
      }

      if (s.y + s.height >= ch) {
        s.y = ch - s.height;
        s.velY *= -1;
        collided = true;
      } else if (s.y <= 0) {
        s.y = 0;
        s.velY *= -1;
        collided = true;
      }

      if (collided) {
        s.imgIndex = (s.imgIndex + 1) % images.length;
        setCurrentIndex(s.imgIndex);
      }

      s.x += s.velX;
      s.y += s.velY;

      setPos({ x: s.x, y: s.y });
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(initFrame);
      cancelAnimationFrame(animId);
      clearTimeout(startTimeout);
    };
  }, [images.length]);

  const handlePress = () => {
    setTrails((prev) =>
      [...prev, { x: pos.x, y: pos.y, src: images[currentIndex] }].slice(-20),
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-transparent select-none"
    >
      <div style={{ display: "none" }} aria-hidden="true">
        {images.map((src, i) => (
          <Image
            height={480}
            width={270}
            key={`preload-${i}`}
            loading="eager"
            priority
            src={src}
            alt=""
          />
        ))}
      </div>

      {trails.map((trail, i) => (
        <Image
          height={480}
          width={270}
          key={`trail-${i}`}
          src={trail.src}
          className="pointer-events-none absolute"
          style={{
            left: trail.x,
            top: trail.y,
            width: dims.width,
            height: dims.height,
            opacity: 0.4,
          }}
          alt=""
        />
      ))}

      <Image
        height={480}
        loading="eager"
        width={270}
        ref={imgRef}
        src={images[currentIndex]}
        onMouseDown={handlePress}
        className={`absolute z-10 h-auto max-w-[40vw] cursor-pointer transition-opacity duration-1000 ${
          isInitialized ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: pos.x,
          top: pos.y,
          width: 270,
        }}
        alt="active"
      />
    </div>
  );
};

export default BouncingImage;
