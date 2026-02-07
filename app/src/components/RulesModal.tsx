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
        <h2 className="text-2xl font-bold mb-4">🎮 The rules of the game</h2>

        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-bold text-lg mb-2">🐾 How to play:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Choose a pet from 5 available species</li>
              <li>Interact with him every day.</li>
              <li>Keep an eye on the indicators: hunger, happiness, energy</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">⚡ Actions:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Feed</strong> - increases satiety (+25)
              </li>
              <li>
                <strong>Play</strong> - increases happiness (+30), spends energy
                (-15)
              </li>
              <li>
                <strong>Sleep</strong> - restores energy (+40)
              </li>
            </ul>
            <p className="mt-2 text-gray-600">⏱️ Between actions: 10 seconds</p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">📊 Progress system:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Experience</strong> - Get paid for your actions
              </li>
              <li>
                <strong>Level</strong> - Every 100 experience points
              </li>
              <li>
                <strong>Points</strong> - passive income = lvl/day
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">🔥 Streak:</h3>
            <p>
              Come back every day to keep the stream going! Experience Bonus:
              +10% for each day of the stream.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">✅ Daily Quests:</h3>
            <p>
              Perform 3 actions of each type (feed, play, sleep) for Get 50
              experience points!
            </p>
          </section>

          <section>
            <h3 className="font-bold text-lg mb-2">⚠️ Important:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>The indicators drop by 10 every 6 hours</li>
              <li>
                All transactions require only the gas of the Base network.
              </li>
              <li>A pet can only be selected once.</li>
            </ul>
          </section>
        </div>

        <button onClick={onClose} className="btn-pixel w-full mt-6 bg-primary">
          Got it!
        </button>
      </div>
    </div>
  );
}
