/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export function QuestList({ quest }: any) {
  const quests = [
    {
      label: "Покормить",
      current: Number(quest?.feedCount || 0),
      total: 3,
      emoji: "🍔",
    },
    {
      label: "Поиграть",
      current: Number(quest?.playCount || 0),
      total: 3,
      emoji: "🎾",
    },
    {
      label: "Спать",
      current: Number(quest?.sleepCount || 0),
      total: 3,
      emoji: "😴",
    },
  ];

  const allCompleted = quests.every((q) => q.current >= q.total);

  return (
    <div className="bg-white pixel-border p-4">
      <h3 className="font-bold text-lg mb-3">📋 Ежедневные квесты</h3>
      <div className="space-y-2">
        {quests.map((q) => (
          <div key={q.label} className="flex items-center justify-between">
            <span className="text-sm">
              {q.emoji} {q.label}
            </span>
            <span
              className={`font-bold ${
                q.current >= q.total ? "text-green-600" : "text-gray-600"
              }`}
            >
              {q.current >= q.total ? "✅" : `${q.current}/${q.total}`}
            </span>
          </div>
        ))}
      </div>
      {allCompleted && (
        <div className="mt-3 text-center text-sm text-green-600 font-bold">
          🎉 Все квесты выполнены! +50 опыта
        </div>
      )}
    </div>
  );
}
