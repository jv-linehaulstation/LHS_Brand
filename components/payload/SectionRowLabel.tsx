"use client";

import React, { useState } from "react";

// Per-block Label for the DriversPage `sections` blocks field. Payload's blocks
// field has no RowLabel prop, so each block wires this as admin.components.Label
// and passes its own blockType + label via clientProps. Renders the section's
// design screenshot (public/assets/admin-previews/<blockType>.png) next to the
// name, turning the collapsed sections list into a visual page map.
//
// Note: the screenshot is a static snapshot of the section's DESIGN/layout, not a
// live thumbnail of current content. Re-run `npm run drivers:capture-previews`
// after significant layout changes. Live Preview is still the real-time view.

export const SectionRowLabel: React.FC<{ blockType?: string; label?: string }> = ({
  blockType,
  label,
}) => {
  const [ok, setOk] = useState(true);
  const name = label || blockType || "Section";
  const src = blockType ? `/assets/admin-previews/${blockType}.png` : "";

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      {src && ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          onError={() => setOk(false)}
          style={{
            width: 120,
            height: 40,
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.12)",
            flex: "none",
          }}
        />
      )}
      <span style={{ fontWeight: 600 }}>{name}</span>
    </span>
  );
};

export default SectionRowLabel;
