"use client";

import { useState } from "react";
import Map from "./Map";
import RoomSelect from "./RoomSelect";
import FilterPills from "./FilterPills";
import InfoPanel from "./InfoPanel";
import config from "./config";
import { Room } from "./config.types";

export default function App({ roomId }: { roomId?: string }) {
  const room = config.map.rooms.find((room) => room.id === roomId);
  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(room);
  const [focusedRoom, setFocusedRoom] = useState<Room | undefined>(undefined);
  const [highlightedRooms, setHighlightedRooms] = useState<Room[]>([]);
  const [activePill, setActivePill] = useState<string | null>(null);

  const [infoPanelExpanded, setInfoPanelExpanded] = useState(() => {
    return Boolean(
      typeof localStorage !== "undefined" &&
        localStorage.getItem("infoPanelExpanded"),
    );
  });

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
    setInfoPanelExpanded(expanded);
    typeof localStorage !== "undefined" &&
      localStorage.setItem("infoPanelExpanded", expanded ? "true" : "");
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
        onRoomSelected={onRoomSelectedFromMap}
        onPan={onPan}
      />
      <RoomSelect config={config} onRoomSelected={onRoomSelectedFromDropdown} />
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
