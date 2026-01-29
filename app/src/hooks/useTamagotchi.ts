/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../lib/contract";
import { useEffect } from "react";

export function useTamagotchi(address: `0x${string}` | undefined) {
  const { data: pet, refetch: refetchPet } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getPet",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const { data: quest, refetch: refetchQuest } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getQuest",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const { writeContract, data: hash, isPending } = useWriteContract();

  const { isSuccess } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (isSuccess) {
      refetchPet();
      refetchQuest();
    }
  }, [isSuccess, refetchPet, refetchQuest]);

  const createPet = (petType: number) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "createPet",
      args: [petType],
    });
  };

  const feed = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "feed",
    });
  };

  const play = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "play",
    });
  };

  const sleep = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "sleep",
    });
  };

  const spendPoints = (amount: bigint) => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "spendPoints",
      args: [amount],
    });
  };

  return {
    pet: pet as any,
    quest: quest as any,
    createPet,
    feed,
    play,
    sleep,
    spendPoints,
    isPending,
    isSuccess,
  };
}
