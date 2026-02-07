"use client";

export function ActionButtons({
  actions,
  isPending,
  energy,
  cooldownRemaining,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "";
    return `${seconds}s`;
  };

  const isDisabled = (action: "play" | "other") => {
    if (isPending) return true;
    if (cooldownRemaining > 0) return true;
    if (action === "play" && energy < 15) return true;
    return false;
  };

  return (
    <div className="space-y-3">
      {cooldownRemaining > 0 && (
        <div className="bg-yellow-100 pixel-border p-3 text-center">
          <p className="font-bold text-sm">
            ⏱️ Cooldown: {formatTime(cooldownRemaining)}
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Wait before the next action
          </p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={actions.feed}
          disabled={isDisabled("other")}
          className="btn-pixel bg-green-400 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 py-4"
        >
          <span className="text-3xl">🍔</span>
          <span className="text-sm font-bold">Feed</span>
          {isPending && <span className="text-xs">⏳</span>}
        </button>

        <button
          onClick={actions.play}
          disabled={isDisabled("play")}
          className="btn-pixel bg-blue-400 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 py-4"
        >
          <span className="text-3xl">🎾</span>
          <span className="text-sm font-bold">Play</span>
          {energy < 15 && cooldownRemaining === 0 && !isPending && (
            <span className="text-xs text-red-600">Tired!</span>
          )}
          {isPending && <span className="text-xs">⏳</span>}
        </button>

        <button
          onClick={actions.sleep}
          disabled={isDisabled("other")}
          className="btn-pixel bg-purple-400 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 py-4"
        >
          <span className="text-3xl">😴</span>
          <span className="text-sm font-bold">Sleep</span>
          {isPending && <span className="text-xs">⏳</span>}
        </button>
      </div>
    </div>
  );
}
