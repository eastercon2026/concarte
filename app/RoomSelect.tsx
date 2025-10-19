import React from "react";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Fuse from "fuse.js";
import { Room, Config } from "./config.types";
import { useTranslations } from "next-intl";

interface RoomSelectProps {
  config: Config;
  onRoomSelected?: (room: Room) => void;
}

export default function RoomSelect({
  config,
  onRoomSelected,
}: RoomSelectProps) {
  const t = useTranslations("room-select");
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onDismiss = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget || e.currentTarget.tagName === "BUTTON") {
      setFocused(false);
    }
  };
  const [query, setQuery] = React.useState("");

  const onRoomClick = (room: Room) => {
    setFocused(false);
    setQuery("");
    onRoomSelected && onRoomSelected(room);
  };

  let results;
  if (query === "") {
    results = config.map.rooms.sort((a, b) => a.label.localeCompare(b.label));
  } else {
    const fuse = new Fuse(config.map.rooms, {
      keys: ["label", "aliases"],
      ignoreLocation: true,
    });

    results = fuse.search(query).map((result) => result.item);
  }

  let icon;
  if (focused) {
    icon = (
      <button
        className="text-primary-text absolute top-2 left-6 cursor-pointer pt-2 pr-2 pb-2 pl-1"
        tabIndex={1}
        onClick={onDismiss}
      >
        <ChevronLeftIcon className="size-6" />
      </button>
    );
  } else {
    icon = (
      <MagnifyingGlassIcon className="text-primary-text absolute top-2 left-6 size-10 pt-2 pr-2 pb-2 pl-1" />
    );
  }

  return (
    <div
      className={`absolute top-0 z-50 w-screen transition ${focused ? "bg-background h-screen" : "bg-transparent"}`}
      onFocus={onFocus}
      onClick={onDismiss}
    >
      <div className="px-4 py-2">
        <input
          className="border-border bg-background text-primary-text placeholder-secondary-text w-full rounded-full border p-2 pl-12"
          tabIndex={2}
          type="text"
          placeholder={t("search-placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {icon}
      </div>
      <ul
        className={`absolute top-14 right-0 bottom-0 left-0 overflow-y-auto px-4 py-2 ${focused ? "" : "hidden"}`}
      >
        {results.map((room, i) => {
          return (
            <li key={room.id}>
              <a
                className="border-border hover:bg-highlight-background block cursor-pointer border-b-2 p-2"
                href={`/room/${room.id}`}
                tabIndex={i + 3}
                onClick={(e) => {
                  e.preventDefault();
                  onRoomClick(room);
                }}
              >
                <p>{room.label}</p>
                {room.aliases && (
                  <p className="text-secondary-text">
                    {room.aliases.join(", ")}
                  </p>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
