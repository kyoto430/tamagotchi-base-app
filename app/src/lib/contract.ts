export const CONTRACT_ADDRESS = '0xFC4bB125de819a7615A3434E18EC3065E0324B8D';

export const CONTRACT_ABI = [
  {
    "inputs": [{"internalType": "uint8", "name": "_petType", "type": "uint8"}],
    "name": "createPet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "play",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sleep",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimPassivePoints",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
    "name": "spendPoints",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "getPet",
    "outputs": [{
      "components": [
        {"internalType": "uint8", "name": "petType", "type": "uint8"},
        {"internalType": "uint256", "name": "hunger", "type": "uint256"},
        {"internalType": "uint256", "name": "happiness", "type": "uint256"},
        {"internalType": "uint256", "name": "energy", "type": "uint256"},
        {"internalType": "uint256", "name": "level", "type": "uint256"},
        {"internalType": "uint256", "name": "experience", "type": "uint256"},
        {"internalType": "uint256", "name": "points", "type": "uint256"},
        {"internalType": "uint256", "name": "lastInteraction", "type": "uint256"},
        {"internalType": "uint256", "name": "lastPassiveClaim", "type": "uint256"},
        {"internalType": "uint256", "name": "streak", "type": "uint256"},
        {"internalType": "uint256", "name": "lastStreakDay", "type": "uint256"},
        {"internalType": "bool", "name": "exists", "type": "bool"}
      ],
      "internalType": "struct Tamagotchi.Pet",
      "name": "",
      "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "getQuest",
    "outputs": [{
      "components": [
        {"internalType": "uint8", "name": "feedCount", "type": "uint8"},
        {"internalType": "uint8", "name": "playCount", "type": "uint8"},
        {"internalType": "uint8", "name": "sleepCount", "type": "uint8"},
        {"internalType": "uint256", "name": "lastReset", "type": "uint256"},
        {"internalType": "bool", "name": "completedToday", "type": "bool"},
        {"internalType": "uint256", "name": "lastCompletionDay", "type": "uint256"}
      ],
      "internalType": "struct Tamagotchi.Quest",
      "name": "",
      "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "getCooldownRemaining",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
    "name": "getPendingPassivePoints",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

export const PET_TYPES = {
  0: 'Cat',
  1: 'Dog',
  2: 'Dragon',
  3: 'Unicorn',
  4: 'Robot'
} as const;