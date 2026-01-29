"use client";

export function RulesModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white pixel-border max-w-md w-full max-h-[80vh] overflow-y-auto p-6">
        <h2 className="text-2xl font-bold mb-4">🎮 Правила игры</h2>

        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-bold text-lg mb-2">🐾 Как играть:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Выберите питомца из 5 доступных видов</li>
              <li>Взаимодействуйте с ним каждый день</li>
              <li>Следите за показателями: голод, счастье, энергия</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">⚡ Действия:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Покормить</strong> - увеличивает сытость (+25)
              </li>
              <li>
                <strong>Поиграть</strong> - повышает счастье (+30), тратит
                энергию (-15)
              </li>
              <li>
                <strong>Спать</strong> - восстанавливает энергию (+40)
              </li>
            </ul>
            <p className="mt-2 text-gray-600">⏱️ Между действиями: 30 секунд</p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">📊 Система прогресса:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Опыт</strong> - получайте за действия
              </li>
              <li>
                <strong>Уровень</strong> - каждые 100 опыта
              </li>
              <li>
                <strong>Очки</strong> - пассивный доход = уровень/день
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">🔥 Стрики:</h3>
            <p>
              Заходите каждый день, чтобы поддерживать стрик! Бонус к опыту:
              +10% за каждый день стрика.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">✅ Ежедневные квесты:</h3>
            <p>
              Выполните 3 действия каждого типа (покормить, поиграть, спать) для
              получения 50 опыта!
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">⚠️ Важно:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Показатели падают каждые 6 часов на 10</li>
              <li>Все транзакции требуют только газ сети Base</li>
              <li>Питомца можно выбрать только один раз</li>
            </ul>
          </section>
        </div>

        <button
          onClick={onClose}
          className="btn-pixel w-full mt-6 bg-primary text-white"
        >
          Понятно!
        </button>
      </div>
    </div>
  );
}
