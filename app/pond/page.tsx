import HabitatScene from "../components/HabitatScene";
import { habitats } from "../../lib/habitats";

export default function PondPage() {
  const habitat = habitats.pond;

  return (
    <HabitatScene
      habitatType="pond"
      title={habitat.title}
      background={habitat.background}
      movementClass={habitat.movementClass}
    />
  );
}