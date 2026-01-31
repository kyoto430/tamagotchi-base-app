'use client';

import { PetDisplay } from './PetDisplay';
import { ActionButtons } from './ActionButtons';
import { Stats } from './Stats';
import { QuestList } from './QuestList';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function GameScreen({ pet, quest, actions, isPending, cooldownRemaining, pendingPoints }: any) {
  const getMood = () => {
    const avg = (Number(pet.hunger) + Number(pet.happiness) + Number(pet.energy)) / 3;
    if (avg > 70) return 'happy';
    if (avg > 30) return 'neutral';
    return 'sad';
  };

  return (
    <div className="space-y-4">
      <Stats pet={pet} />
      
      <div className="bg-white pixel-border p-6">
        <PetDisplay 
          petType={Number(pet.petType)} 
          mood={getMood()}
        />
      </div>

      <ActionButtons 
        actions={actions}
        isPending={isPending}
        energy={Number(pet.energy)}
        cooldownRemaining={cooldownRemaining}
      />

      {pendingPoints > 0 && (
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 pixel-border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">💰 Пассивный доход</p>
              <p className="text-sm text-gray-600">
                Доступно: {pendingPoints} очков
              </p>
            </div>
            <button
              onClick={actions.claimPassivePoints}
              disabled={isPending}
              className="btn-pixel bg-yellow-400 hover:bg-yellow-500 text-sm px-4 py-2"
            >
              Забрать
            </button>
          </div>
        </div>
      )}

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

      <div className="bg-white pixel-border text-center text-xs text-gray-600 space-y-1">
        <p>⚡ Пассивный доход: {pet.level.toString()} очков/день</p>
        <p>📈 Каждый уровень = +1 очко в день</p>
        <p>⏱️ Кулдаун между действиями: 10 секунд</p>
      </div>
    </div>
  );
}