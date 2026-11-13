"use client";
import { useState } from "react";
export function ShareTools({ print = false }: { print?: boolean }) {
  const [message, setMessage] = useState("");
  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: location.href });
      } else {
        await navigator.clipboard.writeText(location.href);
        setMessage("Link copied.");
      }
    } catch {
      setMessage(
        "Sharing cancelled or unavailable. Copy the address from your browser.",
      );
    }
  }
  return (
    <div className="share-tools">
      <button className="button secondary" onClick={share}>
        Share / copy link ↗
      </button>
      {print && (
        <button className="button secondary" onClick={() => window.print()}>
          Print recipe
        </button>
      )}
      <span role="status">{message}</span>
    </div>
  );
}
