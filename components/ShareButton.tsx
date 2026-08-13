"use client";

import { useState } from "react";
import { HiOutlineCheckCircle, HiOutlineShare } from "react-icons/hi2";

type ShareButtonProps = {
  label: string;
  shareTitle: string;
  shareText: string;
  fallbackUrl: string;
  shareSuccessMessage: string;
  copySuccessMessage: string;
  errorMessage: string;
};

export function ShareButton({
  label,
  shareTitle,
  shareText,
  fallbackUrl,
  shareSuccessMessage,
  copySuccessMessage,
  errorMessage,
}: ShareButtonProps) {
  const [feedback, setFeedback] = useState("");

  async function handleShare() {
    const url = window.location.href || fallbackUrl;

    try {
      if (navigator.share) {
        await navigator.share({ title: shareTitle, text: shareText, url });
        setFeedback(shareSuccessMessage);
      } else {
        await navigator.clipboard.writeText(url);
        setFeedback(copySuccessMessage);
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;

      try {
        await navigator.clipboard.writeText(url);
        setFeedback(copySuccessMessage);
      } catch {
        setFeedback(errorMessage);
      }
    }

    window.setTimeout(() => setFeedback(""), 2600);
  }

  return (
    <div className="mt-[clamp(2rem,4vw,3rem)] px-[var(--app-gutter)] text-center">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex min-h-[clamp(3rem,5.5vw,3.75rem)] max-w-full items-center justify-center gap-[clamp(0.5rem,1vw,0.75rem)] rounded-full border border-sky-400/40 bg-sky-400/10 px-[clamp(1rem,3vw,2rem)] text-center text-[clamp(0.8rem,1.35vw,1rem)] font-semibold leading-5 text-sky-300 backdrop-blur-md transition duration-300 hover:border-sky-300 hover:bg-sky-400 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
      >
        {feedback ? (
          <HiOutlineCheckCircle
            className="shrink-0 text-[clamp(1.25rem,2vw,1.5rem)]"
            aria-hidden="true"
          />
        ) : (
          <HiOutlineShare
            className="shrink-0 text-[clamp(1.25rem,2vw,1.5rem)]"
            aria-hidden="true"
          />
        )}
        {feedback || label}
      </button>
      <p className="sr-only" aria-live="polite">
        {feedback}
      </p>
    </div>
  );
}
