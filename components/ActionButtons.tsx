import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { HiArrowUpRight, HiOutlineBookOpen } from "react-icons/hi2";
import type { ActionIcon, SellerAction } from "@/data/sellerData";

type ActionButtonsProps = {
  actions: SellerAction[];
};

const actionIcons: Record<ActionIcon, IconType> = {
  whatsapp: FaWhatsapp,
  catalog: HiOutlineBookOpen,
  instagram: FaInstagram,
};

export function ActionButtons({ actions }: ActionButtonsProps) {
  return (
    <nav
      className="mt-[clamp(1.75rem,4vw,3rem)] space-y-[clamp(0.75rem,1.5vw,1.125rem)] px-[var(--app-gutter)]"
      aria-label="Canais de atendimento"
    >
      {actions.map((action) => {
        const Icon = actionIcons[action.icon];

        return (
          <a
            key={action.icon}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={action.ariaLabel}
            className="group flex min-h-[clamp(4.5rem,9vw,6.25rem)] w-full min-w-0 items-center gap-[clamp(0.75rem,2vw,1.5rem)] rounded-[clamp(1rem,2vw,1.5rem)] border border-white/10 bg-white/[0.065] p-[clamp(0.75rem,2vw,1.5rem)] shadow-[0_12px_35px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/55 hover:bg-sky-400/[0.09] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <span className="grid h-[clamp(2.5rem,5.5vw,3.75rem)] w-[clamp(2.5rem,5.5vw,3.75rem)] shrink-0 place-items-center rounded-[clamp(0.75rem,1.5vw,1rem)] bg-sky-500/15 text-[clamp(1.25rem,2.7vw,1.8rem)] text-sky-400 ring-1 ring-inset ring-sky-400/20 transition duration-300 group-hover:bg-sky-400 group-hover:text-slate-950">
              <Icon aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <strong className="block text-[clamp(0.95rem,1.65vw,1.2rem)] font-semibold text-white">
                {action.title}
              </strong>
              <span className="mt-0.5 block text-[clamp(0.75rem,1.35vw,1rem)] leading-[1.45] text-slate-400">
                {action.subtitle}
              </span>
            </span>
            <HiArrowUpRight
              className="shrink-0 text-[clamp(1.125rem,2.2vw,1.6rem)] text-slate-500 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-400"
              aria-hidden="true"
            />
          </a>
        );
      })}
    </nav>
  );
}
