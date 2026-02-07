/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../lib/contract';
import { useEffect, useState } from 'react';

export function useTamagotchi(address: `0x${string}` | undefined) {
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  const { data: pet, refetch: refetchPet } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getPet',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 5000, // Автообновление каждые 5 секунд
    }
  });

  const { data: quest, refetch: refetchQuest } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getQuest',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 5000,
    }
  });

  const { data: cooldown, refetch: refetchCooldown } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getCooldownRemaining',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 1000, // Обновление каждую секунду для таймера
    }
  });

  const { data: pendingPoints, refetch: refetchPendingPoints } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getPendingPassivePoints',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 10000,
    }
  });

  const { writeContract, data: hash, isPending, reset } = useWriteContract();

  const { isSuccess, isLoading: isConfirming } = useWaitForTransactionReceipt({ 
    hash,
  });

  // Обновление кулдауна
  useEffect(() => {
    if (cooldown) {
      setCooldownRemaining(Number(cooldown));
    }
  }, [cooldown]);

  // Таймер для кулдауна
  useEffect(() => {
    if (cooldownRemaining > 0) {
      const timer = setInterval(() => {
        setCooldownRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [cooldownRemaining]);

  // Обновление после успешной транзакции
  useEffect(() => {
    if (isSuccess) {
      const refetchAll = async () => {
        await Promise.all([
          refetchPet(),
          refetchQuest(),
          refetchCooldown(),
          refetchPendingPoints(),
        ]);
        reset();
      };
      
      refetchAll();
    }
  }, [isSuccess, refetchPet, refetchQuest, refetchCooldown, refetchPendingPoints, reset]);

  const createPet = (petType: number) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'createPet',
      args: [petType],
      chainId: 8453, // Base Mainnet
    });
  };

  const feed = () => {
    if (cooldownRemaining > 0) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'feed',
      chainId: 8453, // Base Mainnet
    });
  };

  const play = () => {
    if (cooldownRemaining > 0) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'play',
      chainId: 8453, // Base Mainnet
    });
  };

  const sleep = () => {
    if (cooldownRemaining > 0) return;
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'sleep',
      chainId: 8453, // Base Mainnet
    });
  };

  const claimPassivePoints = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'claimPassivePoints',
      chainId: 8453, // Base Mainnet
    });
  };

  const spendPoints = (amount: bigint) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'spendPoints',
      args: [amount],
      chainId: 8453, // Base Mainnet
    });
  };

  return {
    pet: pet as any,
    quest: quest as any,
    cooldownRemaining,
    pendingPoints: pendingPoints ? Number(pendingPoints) : 0,
    createPet,
    feed,
    play,
    sleep,
    claimPassivePoints,
    spendPoints,
    isPending: isPending || isConfirming,
    isSuccess,
  };
}