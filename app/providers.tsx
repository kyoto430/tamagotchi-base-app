"use client";
import { ReactNode, useState } from "react";
import { base } from "wagmi/chains";
import { createConfig, http, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { farcasterMiniApp } from "@farcaster/miniapp-wagmi-connector";
import { MiniAppProvider } from "./providers/MiniAppProvider";
import { OnchainKitProvider } from "@coinbase/onchainkit";

const config = createConfig({
  chains: [base],
  transports: { [base.id]: http() },
  connectors: [farcasterMiniApp()],
});

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <MiniAppProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <OnchainKitProvider
            chain={base}
            config={{
              appearance: {
                mode: "auto",
              },
              wallet: {
                display: "modal",
                preference: "all",
              },
            }}
          >
            {children}
          </OnchainKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </MiniAppProvider>
  );
}
