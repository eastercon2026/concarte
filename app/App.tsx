"use client";

import { useSyncExternalStore, useState } from "react";
import Map from "./Map";
import RoomSelect from "./RoomSelect";
import FilterPills from "./FilterPills";
import OverlayPills from "./OverlayPills";
import InfoPanel from "./InfoPanel";
import config from "./config";
import { Room } from "./config.types";

// localStorage-backed stores using useSyncExternalStore. Defined at module
// level for stable subscribe/getSnapshot references. Snapshots are cached so
// React doesn't see a new reference on every call (which would loop).
const EMPTY_OVERLAYS: string[] = [];

const infoPanelStore = (() => {
  const listeners = new Set<() => void>();
  let cache: boolean | null = null;
  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot(): boolean {
      if (cache === null) {
        cache = localStorage.getItem("infoPanelExpanded") !== "false";
      }
      return cache;
    },
    getServerSnapshot(): boolean {
      return true;
    },
    set(value: boolean): void {
      cache = value;
      localStorage.setItem("infoPanelExpanded", value ? "true" : "false");
      for (const listener of listeners) {
        listener();
      }
    },
  };
})();

const overlayStore = (() => {
  const listeners = new Set<() => void>();
  let cache: string[] | null = null;
  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot(): string[] {
      if (cache === null) {
        const raw = localStorage.getItem("activeOverlays");
        cache = raw ? (JSON.parse(raw) as string[]) : EMPTY_OVERLAYS;
      }
      return cache;
    },
    getServerSnapshot(): string[] {
      return EMPTY_OVERLAYS;
    },
    set(value: string[]): void {
      cache = value;
      localStorage.setItem("activeOverlays", JSON.stringify(value));
      for (const listener of listeners) {
        listener();
      }
    },
  };
})();

export default function App({ roomId }: { roomId?: string }) {
  const room = config.map.rooms.find((room) => room.id === roomId);
  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(room);
  const [focusedRoom, setFocusedRoom] = useState<Room | undefined>(undefined);
  const [highlightedRooms, setHighlightedRooms] = useState<Room[]>([]);
  const [activePill, setActivePill] = useState<string | null>(null);
  const activeOverlays = useSyncExternalStore(
    overlayStore.subscribe,
    overlayStore.getSnapshot,
    overlayStore.getServerSnapshot,
  );

  const infoPanelExpanded = useSyncExternalStore(
    infoPanelStore.subscribe,
    infoPanelStore.getSnapshot,
    infoPanelStore.getServerSnapshot,
  );

  const onRoomSelected = (room?: Room) => {
    setHighlightedRooms([]);
    setActivePill(null);
    if (!room) {
      setSelectedRoom(undefined);
      window.history.replaceState(null, "", "/");
    } else {
      history.replaceState(null, "", `/room/${room.id}`);
      setSelectedRoom(room);
    }
  };

  const onRoomSelectedFromMap = (room?: Room) => {
    setFocusedRoom(undefined);
    onRoomSelected(room);
  };

  const onRoomSelectedFromDropdown = (room?: Room) => {
    setFocusedRoom(room);
    onRoomSelected(room);
  };

  const onInfoPanelExpandChange = (expanded: boolean) => {
    infoPanelStore.set(expanded);
  };

  const onOverlayToggle = (id: string) => {
    const next = activeOverlays.includes(id)
      ? activeOverlays.filter((x) => x !== id)
      : [...activeOverlays, id];
    overlayStore.set(next);
  };

  const onZoomClick = (room: Room) => {
    setFocusedRoom(room);
  };

  const onPan = () => {
    setFocusedRoom(undefined);
  };

  return (
    <main>
      <Map
        className="h-dvh w-dvw"
        config={config}
        selectedRoom={selectedRoom}
        focusedRoom={focusedRoom}
        highlightedRooms={highlightedRooms}
        activeOverlays={activeOverlays}
        onRoomSelected={onRoomSelectedFromMap}
        onPan={onPan}
      />
      <RoomSelect config={config} onRoomSelected={onRoomSelectedFromDropdown} />
      <div className="absolute top-15 left-10 z-40 flex gap-2 px-4 pb-2">
        <OverlayPills
          config={config}
          activeOverlays={activeOverlays}
          onToggle={onOverlayToggle}
        />
        <FilterPills
          config={config}
          activePill={activePill}
          onPillSelected={(pill, rooms) => {
            setActivePill(pill);
            setHighlightedRooms(rooms);
            setSelectedRoom(undefined);
            window.history.replaceState(null, "", "/");
          }}
        />
      </div>
      <InfoPanel
        room={selectedRoom}
        expanded={infoPanelExpanded}
        focusedRoom={focusedRoom}
        onInfoPanelExpandChange={onInfoPanelExpandChange}
        onZoomClick={onZoomClick}
      />
    </main>
  );
}
