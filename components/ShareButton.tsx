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
    <div className="mt-9 px-5 text-center max-[359px]:mt-8 max-[359px]:px-3">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-6 text-center text-sm font-semibold leading-5 text-sky-300 backdrop-blur-md transition duration-300 hover:border-sky-300 hover:bg-sky-400 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 max-[359px]:px-4 max-[359px]:text-[0.8rem]"
      >
        {feedback ? (
          <HiOutlineCheckCircle
            className="shrink-0 text-xl"
            aria-hidden="true"
          />
        ) : (
          <HiOutlineShare className="shrink-0 text-xl" aria-hidden="true" />
        )}
        {feedback || label}
      </button>
      <p className="sr-only" aria-live="polite">
        {feedback}
      </p>
    </div>
  );
}
