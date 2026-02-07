"use client";

import { PetSVG } from "../lib/pets";
import { PET_TYPES } from "../lib/contract";

const pets = [
  { id: 0, name: "Cat", emoji: "🐱", color: "bg-orange-200" },
  { id: 1, name: "Dog", emoji: "🐕", color: "bg-amber-200" },
  { id: 2, name: "Dragon", emoji: "🐉", color: "bg-purple-200" },
  { id: 3, name: "Unicorn", emoji: "🦄", color: "bg-pink-200" },
  { id: 4, name: "Robot", emoji: "🤖", color: "bg-gray-200" },
];

export function PetSelection({
  onSelect,
  isPending,
}: {
  onSelect: (id: number) => void;
  isPending: boolean;
}) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Choose a pet</h2>
        <p className="text-gray-600">The selection cannot be changed!</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {pets.map((pet) => (
          <button
            key={pet.id}
            onClick={() => onSelect(pet.id)}
            disabled={isPending}
            className={`${pet.color} pixel-border p-4 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20">
                <PetSVG type={pet.id} mood="neutral" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-bold">
                  {pet.emoji} {pet.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {PET_TYPES[pet.id as keyof typeof PET_TYPES]}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {isPending && (
        <div className="text-center text-sm text-gray-600">
          ⏳ Creating a pet...
        </div>
      )}
    </div>
  );
}
