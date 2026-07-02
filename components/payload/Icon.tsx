import React from "react";

// Compact LineHaul Station badge for the Payload admin (collapsed nav / avatar).
export const Icon = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/lhs-badge.png"
    alt="LineHaul Station"
    style={{ width: 30, height: 30, objectFit: "contain" }}
  />
);

export default Icon;
