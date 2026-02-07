"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { PetSelection } from "./src/components/PetSelection";
import { GameScreen } from "./src/components/GameScreen";
import { RulesModal } from "./src/components/RulesModal";
import { useTamagotchi } from "./src/hooks/useTamagotchi";
import sdk from "@farcaster/miniapp-sdk";
import Link from "next/link";
import { Wallet } from "@coinbase/onchainkit/wallet";

// Правильный тип для контекста
type FarcasterContext = Awaited<typeof sdk.context>;

export default function Home() {
  const { address } = useAccount();
  const {
    pet,
    quest,
    cooldownRemaining,
    pendingPoints,
    createPet,
    feed,
    play,
    sleep,
    claimPassivePoints,
    isPending,
  } = useTamagotchi(address);

  const [showRules, setShowRules] = useState(false);
  const [context, setContext] = useState<FarcasterContext | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const hasPet = pet?.exists;

  // Load context from Farcaster Mini App
  useEffect(() => {
    async function loadContext() {
      try {
        const appContext = await sdk.context;
        setContext(appContext);
      } catch (error) {
        console.error("Failed to load context:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContext();
  }, []);

  const user = context?.user;

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-md mx-auto py-8">
        <header className="text-center mb-8 bg-white pixel-border pt-4">
          <h1 className="text-4xl font-bold mb-2">🐾Tamagotchi</h1>
          <p className="text-gray-600 mb-4">
            A virtual pet on the Base blockchain
          </p>

          {/* Wallet */}
          {/* User info from Farcaster Mini App */}
          {!isLoading && user ? (
            <div className="p-3 flex items-center gap-3">
              <div className="text-left flex-1">
                <p className="font-bold text-sm">
                  {user.displayName || user.username || "Player"}
                </p>
                {user.username && (
                  <p className="text-xs text-gray-400">@{user.username}</p>
                )}
              </div>
              {user.fid && (
                <span className="text-xs bg-blue-100 px-2 py-1 rounded font-mono">
                  FID: {user.fid}
                </span>
              )}
            </div>
          ) : (
            <Wallet />
          )}

          <div className="flex gap-2 justify-center mb-4">
            <button
              onClick={() => setShowRules(true)}
              className="btn-pixel bg-yellow-400"
            >
              📖 Rules
            </button>
          </div>
        </header>

        {!address ? (
          <div className="bg-white pixel-border p-8 text-center"></div>
        ) : !hasPet ? (
          <div className="bg-white pixel-border p-6">
            <PetSelection onSelect={createPet} isPending={isPending} />
          </div>
        ) : (
          <GameScreen
            pet={pet}
            quest={quest}
            cooldownRemaining={cooldownRemaining}
            pendingPoints={pendingPoints}
            actions={{ feed, play, sleep, claimPassivePoints }}
            isPending={isPending}
          />
        )}

        <footer className="text-center mt-8 text-sm text-gray-600 bg-white pixel-border p-2">
          <p className="mt-2">
            Built on Base by{" "}
            <Link href="https://base.app/profile/0x9e2D230EF9cf676Faa8cfb1101c0ae44AD615d18">
              <a className="underline">kyoto430.base.eth</a>
            </Link>
          </p>
        </footer>
      </div>

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </main>
  );
}
