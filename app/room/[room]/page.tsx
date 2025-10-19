import App from "../../App";
import config from "../../config";

export function generateStaticParams() {
  return config.map.rooms.map((room) => {
    return { room: room.id };
  });
}

export default async function Room({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room } = await params;
  return <App roomId={room} />;
}
