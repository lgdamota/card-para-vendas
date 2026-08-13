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
      className="relative z-20 -mt-12 px-6 text-center max-[359px]:-mt-10 max-[359px]:px-4"
      aria-labelledby="seller-name"
    >
      <div className="relative mx-auto aspect-square h-28 w-28 shrink-0 overflow-hidden rounded-full border-[4px] border-sky-400 bg-slate-800 shadow-[0_16px_45px_rgba(0,132,255,0.34)] ring-4 ring-slate-950 max-[359px]:h-24 max-[359px]:w-24">
        <Image
          src={photo}
          alt={`Foto de ${name}`}
          fill
          sizes="(max-width: 359px) 96px, 112px"
          className="object-cover"
        />
      </div>

      <div className="mt-4">
        <h1
          id="seller-name"
          className="text-2xl font-bold tracking-tight text-white max-[359px]:text-[1.35rem]"
        >
          {name}
        </h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-sky-400 max-[359px]:text-[0.8rem] max-[359px]:tracking-[0.12em]">
          {role}
        </p>
        <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-6 text-slate-300 max-[359px]:mt-3 max-[359px]:text-sm max-[359px]:leading-[1.4rem]">
          {message}
        </p>
      </div>
    </section>
  );
}
