"use client";
import { useState, type ImgHTMLAttributes, type ReactNode } from "react";
/** A real second image, not just a zoom. The parent card can activate it too. */
export function HoverMedia({
  src,
  alt,
  alternateSrc,
  linked = false,
  className = "",
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  alternateSrc?: string;
  linked?: boolean;
}) {
  const [toggled, setToggled] = useState(false);
  const image = typeof src === "string" ? src : "";
  const alternate =
    alternateSrc ||
    (image.includes("chai")
      ? "/images/bhel.jpg"
      : image.includes("bhel")
        ? "/images/mixture.jpg"
        : image.includes("mixture")
          ? "/images/sev.jpg"
          : "/images/mixture.jpg");
  return (
    <span
      className={"hover-media " + className + (toggled ? " is-previewing" : "")}
      tabIndex={linked ? undefined : 0}
      role="group"
      aria-label={(alt || "Image") + ". Alternate view on hover or focus."}
    >
      <img {...props} src={src} alt={alt} className="media-primary" />
      <img
        {...props}
        src={alternate}
        alt=""
        aria-hidden="true"
        className="media-alternate"
      />
      {!linked && (
        <button
          type="button"
          className="touch-preview"
          aria-label="Toggle alternate image"
          aria-pressed={toggled}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setToggled((v) => !v);
          }}
        >
          ↔
        </button>
      )}
    </span>
  );
}
export function PackPreview({
  children,
  image,
  large = false,
}: {
  children: ReactNode;
  image: string;
  large?: boolean;
}) {
  return (
    <div className={"pack-preview " + (large ? "large" : "")}>
      <div className="pack-preview-primary">{children}</div>
      <img
        className="pack-preview-alternate"
        src={image}
        width="700"
        height="600"
        alt="Illustrative serving view"
        loading="lazy"
      />
    </div>
  );
}
