"use client";

import { PetSVG } from "../lib/pets";

export function PetDisplay({
  petType,
  mood,
}: {
  petType: number;
  mood: "happy" | "neutral" | "sad";
}) {
  return (
    <div className="relative">
      <div className="w-48 h-48 mx-auto">
        <PetSVG type={petType} mood={mood} />
      </div>

      <div className="text-center mt-4">
        {mood === "happy" && <p className="text-lg">😊 Happy!</p>}
        {mood === "neutral" && <p className="text-lg">😐 Normally</p>}
        {mood === "sad" && <p className="text-lg">😢 Sadly...</p>}
      </div>
    </div>
  );
}
