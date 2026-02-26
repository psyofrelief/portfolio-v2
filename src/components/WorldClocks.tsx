import AnalogueClock from "./ui/AnalogueClock";

const CLOCKS = [
  { label: "Perth (Me)", zone: "Australia/Perth" },
  { label: "GMT", zone: "Europe/London" },
  { label: "UTC", zone: "UTC" },
];

export function WorldClocks() {
  return (
    <div className="gap-xl gap-x-xl flex">
      {CLOCKS.map((clock) => (
        <div key={clock.label} className="flex flex-col items-center">
          <AnalogueClock timezone={clock.zone} />
          <p className="text-foreground-secondary mt-1 text-xs uppercase">
            {clock.label}
          </p>
        </div>
      ))}
    </div>
  );
}
