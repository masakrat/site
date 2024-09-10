// app/page.tsx
import { Massacre } from "@/types";
import MassacreList from "./MassacreList";
import massacres from "../../data/massacres.json";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-gray-700 text-white">
      <MassacreList massacres={massacres as unknown as Massacre[]} />
    </div>
  );
}
