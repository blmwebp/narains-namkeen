"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function ProductImageSwap({
  children,
  hoverImage,
}: {
  children: ReactNode;
  hoverImage: string;
}) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const current = image.current;
    if (!current?.complete) return;
    if (current.naturalWidth > 0) {
      setReady(true);
      setFailed(false);
    } else {
      setReady(false);
      setFailed(true);
      console.error("Product serving image failed to load:", current.src);
    }
  }, [hoverImage]);

  return (
    <div
      className="product-image-swap"
      data-ready={ready && !failed ? "true" : "false"}
    >
      <div className="product-image-swap__primary">{children}</div>
      <img
        ref={image}
        className="product-image-swap__secondary"
        src={hoverImage}
        width="600"
        height="420"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        onLoad={() => {
          setReady(true);
          setFailed(false);
        }}
        onError={(event) => {
          setReady(false);
          setFailed(true);
          console.error(
            "Product serving image failed to load:",
            event.currentTarget.src,
          );
        }}
      />
    </div>
  );
}
