'use client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function QuestList({ quest }: any) {
  const quests = [
    { label: 'Покормить', current: Number(quest?.feedCount || 0), total: 3, emoji: '🍔' },
    { label: 'Поиграть', current: Number(quest?.playCount || 0), total: 3, emoji: '🎾' },
    { label: 'Спать', current: Number(quest?.sleepCount || 0), total: 3, emoji: '😴' },
  ];

  const completedToday = quest?.completedToday || false;
  const allDone = quests.every(q => q.current >= q.total);

  return (
    <div className="bg-white pixel-border p-4">
      <h3 className="font-bold text-lg mb-3">📋 Ежедневные квесты</h3>
      
      {completedToday ? (
        <div className="text-center py-4">
          <div className="text-4xl mb-2">🎉</div>
          <p className="font-bold text-green-600">Квесты выполнены!</p>
          <p className="text-sm text-gray-600 mt-1">
            Приходите завтра за новыми заданиями
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {quests.map((q) => (
              <div key={q.label} className="flex items-center justify-between">
                <span className="text-sm">{q.emoji} {q.label}</span>
                <span className={`font-bold ${q.current >= q.total ? 'text-green-600' : 'text-gray-600'}`}>
                  {q.current >= q.total ? '✅' : `${q.current}/${q.total}`}
                </span>
              </div>
            ))}
          </div>
          {allDone && !completedToday && (
            <div className="mt-3 text-center text-sm text-green-600 font-bold bg-green-50 p-2 rounded">
              🎉 Готово! Награда будет начислена
            </div>
          )}
        </>
      )}
    </div>
  );
}