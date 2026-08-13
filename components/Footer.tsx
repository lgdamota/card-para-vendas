"use client";

import QRCode from "react-qr-code";

type FooterProps = {
  dealerName: string;
  qrCodeLabel: string;
  qrCodeUrl: string;
};

export function Footer({ dealerName, qrCodeLabel, qrCodeUrl }: FooterProps) {
  return (
    <footer className="mt-10 border-t border-white/10 px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 text-center">
      <div className="mx-auto w-fit rounded-2xl bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
        <QRCode
          value={qrCodeUrl}
          size={116}
          bgColor="#ffffff"
          fgColor="#07111f"
          level="M"
          aria-label="QR Code para o WhatsApp do vendedor"
        />
      </div>
      <p className="mx-auto mt-4 max-w-[15rem] text-xs leading-5 text-slate-400">
        {qrCodeLabel}
      </p>
      <p className="mt-6 text-[0.68rem] uppercase tracking-[0.18em] text-slate-600">
        {dealerName}
      </p>
    </footer>
  );
}
