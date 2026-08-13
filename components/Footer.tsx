"use client";

import QRCode from "react-qr-code";

type FooterProps = {
  dealerName: string;
  qrCodeLabel: string;
  qrCodeUrl: string;
};

export function Footer({ dealerName, qrCodeLabel, qrCodeUrl }: FooterProps) {
  return (
    <footer className="mt-[var(--section-gap)] border-t border-white/10 px-[var(--app-gutter)] pb-[max(clamp(2rem,4vw,3rem),env(safe-area-inset-bottom))] pt-[clamp(2rem,4vw,3rem)] text-center">
      <div className="mx-auto w-fit max-w-full rounded-[clamp(1rem,2vw,1.5rem)] bg-white p-[clamp(0.625rem,1.5vw,1rem)] shadow-[0_15px_40px_rgba(0,0,0,0.3)] [&_svg]:h-auto [&_svg]:w-[clamp(6.5rem,13vw,9rem)]">
        <QRCode
          value={qrCodeUrl}
          size={116}
          bgColor="#ffffff"
          fgColor="#07111f"
          level="M"
          aria-label="QR Code para o WhatsApp do vendedor"
        />
      </div>
      <p className="mx-auto mt-[clamp(0.75rem,2vw,1.25rem)] max-w-[clamp(15rem,42vw,22rem)] text-[clamp(0.75rem,1.2vw,0.925rem)] leading-[1.6] text-slate-400">
        {qrCodeLabel}
      </p>
      <p className="mt-[clamp(1.25rem,3vw,2rem)] text-[clamp(0.68rem,1vw,0.8rem)] uppercase tracking-[clamp(0.12em,0.4vw,0.18em)] text-slate-600">
        {dealerName}
      </p>
    </footer>
  );
}
