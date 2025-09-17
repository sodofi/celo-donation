"use client";

import { DaimoPayButton } from "@daimo/pay";
import { baseUSDC } from "@daimo/contract";
import { getAddress } from "viem";

export function DaimoPayTransferButton({
  text,
  toChainId,
  toAddress,
  tokenAddress,
  amount,
  onPaymentStarted,
  onPaymentCompleted,
}: {
  text: string;
  toAddress: `0x${string}`;
  amount: string;
  tokenAddress?: `0x${string}`;
  toChainId?: number;
  onPaymentStarted?: () => void;
  onPaymentCompleted?: () => void;
}) {
  return (
    <div className="w-full">
      <DaimoPayButton.Custom
        appId={process.env.NEXT_PUBLIC_DAIMO_PAY_KEY || "pay-demo"}
        toChain={toChainId || baseUSDC.chainId}
        toUnits={amount}
        toToken={tokenAddress || getAddress(baseUSDC.token)}
        toAddress={toAddress}
        onPaymentStarted={(e) => {
          console.log("Payment started", e);
          onPaymentStarted?.();
        }}
        onPaymentCompleted={(e) => {
          console.log("Payment completed", e);
          onPaymentCompleted?.();
        }}
        closeOnSuccess
      >
        {({ show: showDaimoModal }) => (
          <button
            onClick={() => showDaimoModal()}
            className="w-full bg-black text-white font-inter font-750 text-lg py-6 px-4 border-4 border-black hover:bg-white hover:text-black hover:border-black transition-colors duration-200 tracking-wide"
          >
            {text}
          </button>
        )}
      </DaimoPayButton.Custom>
    </div>
  );
}
