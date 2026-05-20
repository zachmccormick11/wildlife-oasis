import HabitatScene from "../../components/HabitatScene";
import { habitats } from "../../../lib/habitats";

type Props = {
  params: Promise<{
    habitatType: string;
  }>;
};

export default async function HabitatPage({ params }: Props) {
  const { habitatType } = await params;

  const habitat = habitats[
    habitatType as keyof typeof habitats
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
      habitatType={habitatType}
      title={habitat.title}
      background={habitat.background}
      movementClass={habitat.movementClass}
    />
  );
}