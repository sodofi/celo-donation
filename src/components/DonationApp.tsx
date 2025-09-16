"use client";

import { useState } from "react";
import { DaimoPayTransferButton } from "~/components/daimo-pay-transfer-button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const PRESET_AMOUNTS = [5, 10, 25, 50];
const RECIPIENT_ADDRESS = "0x742d35Cc6A17c5E1b2E5f85e5C4EAab7a7a623aA" as `0x${string}`;
const CELO_USDC_ADDRESS = "0xcebA9300f2b948710d2653dD7B07f33A8B32118C" as `0x${string}`;

export default function DonationApp() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [lastDonationAmount, setLastDonationAmount] = useState<number | null>(null);

  const handleDonationSuccess = (amount: number) => {
    setLastDonationAmount(amount);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setLastDonationAmount(null);
    }, 5000);
  };

  if (showThankYou) {
    return (
      <div className="w-full max-w-md mx-auto px-4">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">Thank You!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Your donation of ${lastDonationAmount} USDC is greatly appreciated!
            </p>
            <p className="text-muted-foreground">
              Your support helps keep this community thriving.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
            >
              Make Another Donation
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl">Support Our Community</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              Choose an amount to donate with USDC on Celo
            </p>
            <div className="text-sm bg-muted p-2 rounded-md font-mono break-all">
              {RECIPIENT_ADDRESS}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {PRESET_AMOUNTS.map((amount) => (
              <DaimoPayTransferButton
                key={amount}
                text={`$${amount} USDC`}
                amount={amount.toString()}
                toAddress={RECIPIENT_ADDRESS}
                tokenAddress={CELO_USDC_ADDRESS}
                toChainId={42220}
                onPaymentCompleted={() => handleDonationSuccess(amount)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}