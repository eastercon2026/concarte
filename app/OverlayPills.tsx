import React from "react";
import { Config } from "./config.types";

interface OverlayPillsProps {
  config: Config;
  activeOverlays: string[];
  onToggle: (id: string) => void;
}

export default function OverlayPills({
  config,
  activeOverlays,
  onToggle,
}: OverlayPillsProps) {
  if (!config.overlays || config.overlays.length === 0) {
    return null;
  }

  return (
    <>
      {config.overlays.map((overlay) => (
        <button
          key={overlay.id}
          className={`cursor-pointer rounded-full border px-4 py-2 text-sm whitespace-nowrap ${
            activeOverlays.includes(overlay.id)
              ? "border-accent bg-accent text-white"
              : "border-border bg-background text-primary-text hover:bg-highlight-background"
          }`}
          onClick={() => onToggle(overlay.id)}
        >
          {overlay.label}
        </button>
      ))}
    </>
  );
}
