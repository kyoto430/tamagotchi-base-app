/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PetDisplay } from "./PetDisplay";
import { ActionButtons } from "./ActionButtons";
import { Stats } from "./Stats";
import { QuestList } from "./QuestList";

export function GameScreen({ pet, quest, actions, isPending }: any) {
  const getMood = () => {
    const avg =
      (Number(pet.hunger) + Number(pet.happiness) + Number(pet.energy)) / 3;
    if (avg > 70) return "happy";
    if (avg > 30) return "neutral";
    return "sad";
  };

  return (
    <div className="space-y-4">
      <Stats pet={pet} />

      <div className="bg-white pixel-border p-6">
        <PetDisplay petType={Number(pet.petType)} mood={getMood()} />
      </div>

      <ActionButtons
        actions={actions}
        isPending={isPending}
        energy={Number(pet.energy)}
      />

      <QuestList quest={quest} />

      <div className="bg-white pixel-border p-4">
        <div className="grid grid-cols-2 gap-4 text-center text-sm">
          <div>
            <div className="text-2xl font-bold">🔥 {pet.streak.toString()}</div>
            <div className="text-gray-600">Стрик</div>
          </div>
          <div>
            <div className="text-2xl font-bold">💎 {pet.points.toString()}</div>
            <div className="text-gray-600">Очки</div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600">
        <p>Пассивный доход: {pet.level.toString()} очков/день</p>
        <p>Каждый уровень = +1 очко в день</p>
      </div>
    </div>
  );
}
