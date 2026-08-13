import Image from "next/image";

type SellerProfileProps = {
  name: string;
  role: string;
  photo: string;
  message: string;
};

export function SellerProfile({
  name,
  role,
  photo,
  message,
}: SellerProfileProps) {
  return (
    <section
      className="relative z-20 -mt-[clamp(2.5rem,6vw,4.5rem)] px-[var(--app-gutter)] text-center"
      aria-labelledby="seller-name"
    >
      <div className="relative mx-auto aspect-square h-[clamp(6rem,14vw,9rem)] w-[clamp(6rem,14vw,9rem)] shrink-0 overflow-hidden rounded-full border-[clamp(3px,0.45vw,5px)] border-sky-400 bg-slate-800 shadow-[0_16px_45px_rgba(0,132,255,0.34)] ring-[clamp(3px,0.45vw,5px)] ring-slate-950">
        <Image
          src={photo}
          alt={`Foto de ${name}`}
          fill
          sizes="(max-width: 639px) 28vw, (max-width: 1023px) 7.5rem, 9rem"
          className="object-cover"
        />
      </div>

      <div className="mt-[clamp(0.875rem,2vw,1.5rem)]">
        <h1
          id="seller-name"
          className="text-[clamp(1.35rem,2.7vw,2.15rem)] font-bold tracking-tight text-white"
        >
          {name}
        </h1>
        <p className="mt-1 text-[clamp(0.8rem,1.35vw,1rem)] font-semibold uppercase tracking-[clamp(0.12em,0.5vw,0.18em)] text-sky-400">
          {role}
        </p>
        <p className="mx-auto mt-[clamp(0.75rem,2vw,1.25rem)] max-w-[clamp(18rem,68vw,42rem)] text-[clamp(0.875rem,1.55vw,1.125rem)] leading-[1.6] text-slate-300">
          {message}
        </p>
      </div>
    </section>
  );
}
