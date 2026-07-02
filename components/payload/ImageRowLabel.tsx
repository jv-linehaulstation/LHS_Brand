"use client";

import { useRowLabel } from "@payloadcms/ui";
import React, { useEffect, useState } from "react";

// Custom RowLabel for array fields that have an `image` upload sub-field
// (amenitySlides, membershipSteps, spaceSteps, everythingTiles). Shows the
// Media "thumbnail" imageSize next to the row's text label so collapsed rows are
// identifiable at a glance instead of reading "Row 1 / Row 2". Falls back to just
// the text when no image is set yet (seeded rows leave images empty).

type Mediaish = {
  url?: string;
  thumbnailURL?: string;
  sizes?: { thumbnail?: { url?: string } };
};
type Row = {
  image?: string | number | Mediaish | null;
  name?: string;
  title?: string;
  label?: string;
};

function thumbFrom(m: Mediaish | null | undefined): string | null {
  if (!m) return null;
  return m.sizes?.thumbnail?.url || m.thumbnailURL || m.url || null;
}

export const ImageRowLabel: React.FC = () => {
  const { data, rowNumber } = useRowLabel<Row>();
  const text =
    data?.name?.trim() ||
    data?.title?.trim() ||
    data?.label?.trim() ||
    `Row ${String((rowNumber ?? 0) + 1).padStart(2, "0")}`;

  const [thumb, setThumb] = useState<string | null>(null);

  useEffect(() => {
    const img = data?.image;
    if (!img) {
      setThumb(null);
      return;
    }
    // Already-populated Media object.
    if (typeof img === "object") {
      setThumb(thumbFrom(img));
      return;
    }
    // Just an id in form state → fetch the Media doc for its thumbnail url.
    let cancelled = false;
    fetch(`/api/media/${img}?depth=0`, { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((doc) => {
        if (!cancelled) setThumb(thumbFrom(doc));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [data?.image]);

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      {thumb && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumb}
          alt=""
          style={{ width: 34, height: 34, objectFit: "cover", borderRadius: 4, flex: "none" }}
        />
      )}
      <span>{text}</span>
    </span>
  );
};

export default ImageRowLabel;
