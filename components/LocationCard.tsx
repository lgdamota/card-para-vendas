import { HiArrowTopRightOnSquare, HiMapPin } from "react-icons/hi2";

type LocationCardProps = {
  title: string;
  dealerName: string;
  address: string;
  latitude: string;
  longitude: string;
  buttonLabel: string;
};

export function LocationCard({
  title,
  dealerName,
  address,
  latitude,
  longitude,
  buttonLabel,
}: LocationCardProps) {
  const coordinates = `${latitude},${longitude}`;
  const encodedCoordinates = encodeURIComponent(coordinates);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedCoordinates}&z=15&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedCoordinates}`;

  return (
    <section
      className="mt-10 px-5 max-[359px]:mt-8 max-[359px]:px-3"
      aria-labelledby="location-heading"
    >
      <div className="mb-4 flex items-center gap-2">
        <HiMapPin className="text-xl text-sky-400" aria-hidden="true" />
        <h2 id="location-heading" className="text-lg font-bold text-white">
          {title}
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <iframe
          title={`Mapa de ${dealerName}`}
          src={mapEmbedUrl}
          width="100%"
          height="220"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[clamp(11rem,62vw,13.75rem)] w-full border-0 grayscale-[0.15] contrast-[1.05]"
        />
        <div className="p-5 max-[359px]:p-4">
          <h3 className="font-semibold text-white">{dealerName}</h3>
          <p className="mt-1 text-sm leading-5 text-slate-400">{address}</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 text-sm font-bold text-slate-950 transition duration-300 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            {buttonLabel}
            <HiArrowTopRightOnSquare className="text-lg" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
