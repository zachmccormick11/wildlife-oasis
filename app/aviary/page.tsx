import HabitatScene from "../components/HabitatScene";
import { habitats } from "../../lib/habitats";

export default function AviaryPage() {
  const habitat = habitats.aviary;

  return (
    <HabitatScene
      habitatType="aviary"
      title={habitat.title}
      background={habitat.background}
      movementClass={habitat.movementClass}
    />
  );
}