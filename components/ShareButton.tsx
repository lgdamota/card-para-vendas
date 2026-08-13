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
    <div className="mt-9 px-5 text-center">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-6 text-sm font-semibold text-sky-300 backdrop-blur-md transition duration-300 hover:border-sky-300 hover:bg-sky-400 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
      >
        {feedback ? (
          <HiOutlineCheckCircle className="text-xl" aria-hidden="true" />
        ) : (
          <HiOutlineShare className="text-xl" aria-hidden="true" />
        )}
        {feedback || label}
      </button>
      <p className="sr-only" aria-live="polite">
        {feedback}
      </p>
    </div>
  );
}
