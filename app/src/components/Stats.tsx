/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export function Stats({ pet }: any) {
  const stats = [
    {
      label: "Сытость",
      value: Number(pet.hunger),
      color: "bg-green-500",
      emoji: "🍔",
    },
    {
      label: "Счастье",
      value: Number(pet.happiness),
      color: "bg-blue-500",
      emoji: "😊",
    },
    {
      label: "Энергия",
      value: Number(pet.energy),
      color: "bg-purple-500",
      emoji: "⚡",
    },
  ];

  return (
    <div className="bg-white pixel-border p-4 space-y-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-2xl font-bold">Ур. {pet.level.toString()}</span>
          <span className="text-sm text-gray-600 ml-2">
            ({pet.experience.toString()}/{(Number(pet.level) * 100).toString()}{" "}
            опыта)
          </span>
        </div>
      </div>

      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="flex justify-between text-sm mb-1">
            <span>
              {stat.emoji} {stat.label}
            </span>
            <span className="font-bold">{stat.value}/100</span>
          </div>
          <div className="stat-bar">
            <div
              className={`stat-fill ${stat.color}`}
              style={{ width: `${stat.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
