/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export function ActionButtons({ actions, isPending, energy }: any) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <button
        onClick={actions.feed}
        disabled={isPending}
        className="btn-pixel bg-green-400 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 py-4"
      >
        <span className="text-3xl">🍔</span>
        <span className="text-sm font-bold">Покормить</span>
      </button>

      <button
        onClick={actions.play}
        disabled={isPending || energy < 15}
        className="btn-pixel bg-blue-400 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 py-4"
      >
        <span className="text-3xl">🎾</span>
        <span className="text-sm font-bold">Поиграть</span>
      </button>

      <button
        onClick={actions.sleep}
        disabled={isPending}
        className="btn-pixel bg-purple-400 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 py-4"
      >
        <span className="text-3xl">😴</span>
        <span className="text-sm font-bold">Спать</span>
      </button>
    </div>
  );
}
