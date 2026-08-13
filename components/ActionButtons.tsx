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
    <nav className="mt-8 space-y-3 px-5" aria-label="Canais de atendimento">
      {actions.map((action) => {
        const Icon = actionIcons[action.icon];

        return (
          <a
            key={action.icon}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={action.ariaLabel}
            className="group flex min-h-20 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.065] p-4 shadow-[0_12px_35px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/55 hover:bg-sky-400/[0.09] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-500/15 text-2xl text-sky-400 ring-1 ring-inset ring-sky-400/20 transition duration-300 group-hover:bg-sky-400 group-hover:text-slate-950">
              <Icon aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <strong className="block text-base font-semibold text-white">
                {action.title}
              </strong>
              <span className="mt-0.5 block text-sm leading-5 text-slate-400">
                {action.subtitle}
              </span>
            </span>
            <HiArrowUpRight
              className="shrink-0 text-xl text-slate-500 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-400"
              aria-hidden="true"
            />
          </a>
        );
      })}
    </nav>
  );
}
