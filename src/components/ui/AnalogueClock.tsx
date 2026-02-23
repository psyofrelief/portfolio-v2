"use client";
import { useEffect, useState } from "react";

interface ClockProps {
  timezone: string;
}

export default function AnalogueClock({ timezone }: ClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Convert current time to the specific timezone
  const localizedTime = new Date(
    time.toLocaleString("en-US", { timeZone: timezone }),
  );

  const seconds = localizedTime.getSeconds();
  const minutes = localizedTime.getMinutes();
  const hours = localizedTime.getHours();

  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* Hour */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            transform: `rotate(${hourDeg}deg)`,
            transformOrigin: "50% 50%",
          }}
        />
        {/* Minute */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            transform: `rotate(${minDeg}deg)`,
            transformOrigin: "50% 50%",
          }}
        />
        {/* Second */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="var(--color-destructive)"
          strokeWidth="1"
          strokeLinecap="round"
          style={{
            transform: `rotate(${secDeg}deg)`,
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
      {/* Digital readout for convenience */}
      <p className="mt-xs text-xs uppercase">
        {localizedTime.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
    </div>
  );
}
