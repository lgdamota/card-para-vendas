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
      className="relative z-20 -mt-12 px-6 text-center"
      aria-labelledby="seller-name"
    >
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-[4px] border-sky-400 bg-slate-800 shadow-[0_16px_45px_rgba(0,132,255,0.34)] ring-4 ring-slate-950">
        <Image
          src={photo}
          alt={`Foto de ${name}`}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

      <div className="mt-4">
        <h1
          id="seller-name"
          className="text-2xl font-bold tracking-tight text-white"
        >
          {name}
        </h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-sky-400">
          {role}
        </p>
        <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-6 text-slate-300">
          {message}
        </p>
      </div>
    </section>
  );
}
