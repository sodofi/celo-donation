"use client";

import { useState } from "react";
import { DaimoPayTransferButton } from "~/components/daimo-pay-transfer-button";

const PRESET_AMOUNTS = [1, 2, 5, 10];
const RECIPIENT_ADDRESS = "0x4858aBb6dfF69904f1c155D40A48CD8846AEA2f6" as `0x${string}`;
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
      <div className="min-h-screen bg-celo-purple flex flex-col">
        {/* Header Block */}
        <div className="bg-celo-yellow h-32 flex items-center justify-start pl-8">
          <h1 className="font-gt-alpina text-6xl font-thin text-celo-purple italic tracking-tight">
            Thank You
          </h1>
        </div>

        {/* Content Block */}
        <div className="flex-1 bg-celo-purple p-8 flex flex-col justify-center space-y-12">
          <div className="bg-white p-8 border-4 border-black">
            <div className="space-y-6">
              <div className="font-inter font-750 text-2xl text-black tracking-wide">
                YOUR DONATION OF ${lastDonationAmount} USDC
              </div>
              <div className="font-inter text-lg text-celo-brown font-medium">
                Transaction completed on Celo network. Your support strengthens our community infrastructure.
              </div>
              <div className="bg-celo-tan-light p-4 border-2 border-celo-brown font-inter text-sm font-mono text-celo-brown">
                RECIPIENT: {RECIPIENT_ADDRESS.slice(0, 16)}...{RECIPIENT_ADDRESS.slice(-8)}
              </div>
            </div>
          </div>

          {/* Action Block */}
          <div className="bg-celo-green p-6 border-4 border-celo-yellow">
            <button
              onClick={() => setShowThankYou(false)}
              className="w-full bg-black text-celo-yellow font-inter font-750 text-xl py-4 px-8 hover:bg-celo-yellow hover:text-black transition-colors duration-200 border-2 border-celo-yellow"
            >
              MAKE ANOTHER DONATION
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-celo-tan-light">
      {/* Asymmetrical Header */}
      <div className="bg-celo-purple h-40 flex items-end justify-start pl-12 pb-8">
        <h1 className="font-gt-alpina text-5xl font-thin text-celo-yellow italic tracking-tighter leading-none">
          Support Our Community
        </h1>
      </div>
      
      {/* <div className="bg-celo-green h-24 flex items-center justify-end pr-12">
        <h2 className="font-gt-alpina text-5xl font-thin text-white tracking-tight">
          Community
        </h2>
      </div> */}

      {/* Content Blocks */}
      <div className="p-8 space-y-8">
        {/* Instructions Block */}
        <div className="bg-white p-8 border-4 border-black">
          <div className="space-y-4">
            <div className="font-inter font-750 text-xl text-black tracking-wide">
              DONATE USDC ON CELO NETWORK
            </div>
            <div className="font-inter text-base text-celo-brown font-medium">
              Direct community support via decentralized payments. Choose your contribution amount below.
            </div>
          </div>
        </div>

        {/* Address Block */}
        <div className="bg-celo-yellow p-6 border-4 border-celo-purple">
          <div className="space-y-3">
            <div className="font-inter font-750 text-sm text-celo-purple tracking-widest">
              RECIPIENT WALLET
            </div>
            <div className="font-inter font-mono text-lg text-celo-purple break-all bg-white p-3 border-2 border-celo-purple">
              {RECIPIENT_ADDRESS}
            </div>
          </div>
        </div>

        {/* Payment Grid */}
        <div className="space-y-6">
          <div className="font-inter font-750 text-2xl text-celo-purple tracking-wide">
            SELECT AMOUNT
          </div>
          <div className="grid grid-cols-2 gap-6">
            {PRESET_AMOUNTS.map((amount, index) => (
              <div key={amount} className={`${
                index === 0 ? 'bg-celo-accent-lime border-celo-green' :
                index === 1 ? 'bg-celo-accent-orange border-celo-brown' :
                index === 2 ? 'bg-celo-accent-pink border-celo-purple' :
                'bg-celo-accent-blue border-celo-purple'
              } p-1 border-4`}>
                <DaimoPayTransferButton
                  text={`$${amount} USDC`}
                  amount={amount.toString()}
                  toAddress={RECIPIENT_ADDRESS}
                  tokenAddress={CELO_USDC_ADDRESS}
                  toChainId={42220}
                  onPaymentCompleted={() => handleDonationSuccess(amount)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Block */}
        <div className="bg-celo-brown p-6 border-4 border-black">
          <div className="font-inter text-white font-medium text-sm tracking-wide">
            POWERED BY CELO BLOCKCHAIN • DAIMO PAY INTEGRATION • INSTANT SETTLEMENT
          </div>
        </div>
      </div>
    </div>
  );
}