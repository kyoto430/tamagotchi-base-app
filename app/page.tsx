"use client";
import { useState, useEffect } from "react";
import sdk from "@farcaster/miniapp-sdk";
import { useMiniApp } from "./providers/MiniAppProvider";
import { useAccount } from "wagmi";
import { PetSelection } from "./src/components/PetSelection";
import { GameScreen } from "./src/components/GameScreen";
import { RulesModal } from "./src/components/RulesModal";
import { useTamagotchi } from "./src/hooks/useTamagotchi";
import Image from "next/image";
import { Wallet } from "@coinbase/onchainkit/wallet";

// Типизация для пользователя
interface UserProfile {
  fid: number;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
}

interface AuthResponse {
  success: boolean;
  user?: {
    fid: number; // FID is the unique identifier for the user
    issuedAt?: number;
    expiresAt?: number;
  };
  message?: string; // Error messages come as 'message' not 'error'
}

export default function Home() {
  const { isReady } = useMiniApp();
  const [userProfile] = useState<UserProfile | null>(null);

  const { address } = useAccount();
  const { pet, quest, createPet, feed, play, sleep, isPending } =
    useTamagotchi(address);
  const [showRules, setShowRules] = useState(false);

  const hasPet = pet?.exists;

  const [, setAuthData] = useState<AuthResponse | null>(null);
  const [, setIsAuthLoading] = useState(true);
  const [, setAuthError] = useState<Error | null>(null);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await sdk.quickAuth.fetch("/api/auth");
        const data = await response.json();
        setAuthData(data);
      } catch (err) {
        setAuthError(err as Error);
      } finally {
        setIsAuthLoading(false);
      }
    };

    if (isReady) {
      authenticate();
    }
  }, [isReady]);

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-md mx-auto py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">🐾 Web3 Tamagotchi</h1>
          <p className="text-gray-600 mb-4">
            Виртуальный питомец на блокчейне Base
          </p>

          <div className="flex gap-2 justify-center mb-4">
            <button
              onClick={() => setShowRules(true)}
              className="btn-pixel bg-yellow-400"
            >
              📖 Правила
            </button>
          </div>

          {/* Отображение информации о пользователе */}
          {userProfile ? (
            <div className="flex gap-3 ml-4">
              {/* Аватар */}
              {userProfile.pfpUrl && (
                <Image
                  src={userProfile.pfpUrl}
                  alt={userProfile.username || "User avatar"}
                  width={48}
                  height={48}
                  className="object-cover"
                  unoptimized
                />
              )}

              {/* Имя пользователя */}
              <div className="flex flex-col">
                {userProfile.displayName && (
                  <span className="font-semibold text-sm text-white">
                    {userProfile.displayName}
                  </span>
                )}
                {userProfile.username && (
                  <span className="text-xs text-gray-500">
                    @{userProfile.username}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <Wallet />
          )}
        </header>

        {!address ? (
          <div className="bg-white pixel-border p-8 text-center">
            <p className="text-lg mb-4">
              👆 Подключите кошелек, чтобы начать играть
            </p>
            <p className="text-sm text-gray-600">Нужна сеть Base Mainnet</p>
          </div>
        ) : !hasPet ? (
          <div className="bg-white pixel-border p-6">
            <PetSelection onSelect={createPet} isPending={isPending} />
          </div>
        ) : (
          <GameScreen
            pet={pet}
            quest={quest}
            actions={{ feed, play, sleep }}
            isPending={isPending}
          />
        )}

        <footer className="text-center mt-8 text-sm text-gray-600">
          <p>Все транзакции бесплатные, только газ сети Base</p>
          <p className="mt-2">Играйте каждый день для поддержания стрика! 🔥</p>
        </footer>
      </div>

      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </main>
  );
}
