import Image from "next/image";

type HeroProps = {
  backgroundImage: string;
  logo: string;
  dealerName: string;
  slogan: string;
};

export function Hero({ backgroundImage, logo, dealerName, slogan }: HeroProps) {
  return (
    <header className="relative min-h-[max(17.5rem,35svh)] overflow-hidden rounded-b-[clamp(1.75rem,4vw,3.25rem)] bg-slate-950 sm:min-h-[clamp(22rem,42vw,29rem)]">
      <Image
        src={backgroundImage}
        alt="Motocicleta em destaque na concessionária"
        fill
        preload
        sizes="(max-width: 639px) 100vw, (max-width: 767px) 92vw, (max-width: 1023px) 48rem, (max-width: 1279px) 54rem, (max-width: 1535px) 58rem, 60rem"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.3)_0%,rgba(2,8,23,0.2)_38%,rgba(2,8,23,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(0,132,255,0.2),transparent_42%)]" />

      <div className="relative z-10 flex min-h-[max(17.5rem,35svh)] flex-col justify-between px-[var(--app-gutter)] pb-[clamp(3rem,7vw,5.5rem)] pt-[max(clamp(1.25rem,3vw,2.5rem),env(safe-area-inset-top))] sm:min-h-[clamp(22rem,42vw,29rem)]">
        <div className="flex w-fit max-w-full items-center justify-center rounded-[clamp(0.75rem,1.5vw,1.125rem)] border border-white/15 bg-slate-950/45 px-[clamp(0.625rem,1.5vw,1rem)] py-[clamp(0.375rem,1vw,0.75rem)] shadow-xl backdrop-blur-md">
          <Image
            src={logo}
            alt={`Logotipo ${dealerName}`}
            width={258}
            height={102}
            className="h-auto w-[clamp(7.5rem,16vw,12rem)] max-w-full object-contain"
          />
        </div>

        <div className="max-w-[clamp(17rem,48vw,34rem)]">
          <span className="mb-[clamp(0.625rem,1.5vw,1rem)] block h-1 w-[clamp(2.5rem,5vw,4rem)] rounded-full bg-sky-400" />
          <p className="text-[clamp(1.45rem,3.2vw,2.65rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-lg">
            {slogan}
          </p>
        </div>
      </div>
    </header>
  );
}
