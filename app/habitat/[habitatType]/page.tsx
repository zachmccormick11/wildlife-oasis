import HabitatScene from "../../components/HabitatScene";
import { habitats } from "../../../lib/habitats";

type Props = {
  params: {
    habitatType: string;
  };
};

export default function HabitatPage({ params }: Props) {
  const habitat = habitats[
    params.habitatType as keyof typeof habitats
  ];

  if (!habitat) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-4xl font-bold">
          Habitat Not Found
        </h1>
      </main>
    );
  }

  return (
    <HabitatScene
      habitatType={params.habitatType}
      title={habitat.title}
      background={habitat.background}
      movementClass={habitat.movementClass}
    />
  );
}