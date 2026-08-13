import Image from "next/image";

type HeroProps = {
  backgroundImage: string;
  logo: string;
  dealerName: string;
  slogan: string;
};

export function Hero({ backgroundImage, logo, dealerName, slogan }: HeroProps) {
  return (
    <header className="relative min-h-[35svh] overflow-hidden rounded-b-[2.25rem] bg-slate-950">
      <Image
        src={backgroundImage}
        alt="Motocicleta em destaque na concessionária"
        fill
        preload
        sizes="(min-width: 480px) 480px, 100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.3)_0%,rgba(2,8,23,0.2)_38%,rgba(2,8,23,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(0,132,255,0.2),transparent_42%)]" />

      <div className="relative z-10 flex min-h-[35svh] flex-col justify-between px-6 pb-14 pt-[max(1.5rem,env(safe-area-inset-top))]">
        <div className="flex w-fit items-center justify-center rounded-xl border border-white/15 bg-slate-950/45 px-3 py-2 shadow-xl backdrop-blur-md">
          <Image
            src={logo}
            alt={`Logotipo ${dealerName}`}
            width={258}
            height={102}
            className="h-auto w-[8.5rem] object-contain"
          />
        </div>

        <div className="max-w-[19rem]">
          <span className="mb-3 block h-1 w-11 rounded-full bg-sky-400" />
          <p className="text-[1.65rem] font-bold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-lg sm:text-3xl">
            {slogan}
          </p>
        </div>
      </div>
    </header>
  );
}
