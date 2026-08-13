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
      className="mt-[var(--section-gap)] px-[var(--app-gutter)]"
      aria-labelledby="location-heading"
    >
      <div className="mb-[clamp(0.75rem,2vw,1.25rem)] flex items-center gap-[clamp(0.5rem,1vw,0.75rem)]">
        <HiMapPin
          className="text-[clamp(1.25rem,2.4vw,1.75rem)] text-sky-400"
          aria-hidden="true"
        />
        <h2
          id="location-heading"
          className="text-[clamp(1.125rem,2vw,1.5rem)] font-bold text-white"
        >
          {title}
        </h2>
      </div>

      <div className="overflow-hidden rounded-[clamp(1.5rem,3vw,2rem)] border border-white/10 bg-white/[0.06] shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <iframe
          title={`Mapa de ${dealerName}`}
          src={mapEmbedUrl}
          width="100%"
          height="220"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[clamp(11rem,56vw,22.5rem)] w-full border-0 grayscale-[0.15] contrast-[1.05]"
        />
        <div className="p-[clamp(1rem,2.5vw,2rem)]">
          <h3 className="text-[clamp(1rem,1.7vw,1.25rem)] font-semibold text-white">
            {dealerName}
          </h3>
          <p className="mt-1 text-[clamp(0.875rem,1.35vw,1rem)] leading-[1.5] text-slate-400">
            {address}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[clamp(1rem,2vw,1.5rem)] flex min-h-[clamp(3rem,5.5vw,3.75rem)] w-full items-center justify-center gap-2 rounded-[clamp(0.75rem,1.5vw,1rem)] bg-sky-500 px-4 text-[clamp(0.875rem,1.35vw,1rem)] font-bold text-slate-950 transition duration-300 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            {buttonLabel}
            <HiArrowTopRightOnSquare
              className="text-[clamp(1.125rem,2vw,1.5rem)]"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
