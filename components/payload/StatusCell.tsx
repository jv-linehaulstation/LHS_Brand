"use client";
import React from "react";

// Custom list cell for the `published` field → WordPress-style status pill.
export const StatusCell = ({ cellData }: { cellData?: boolean }) => {
  const published = Boolean(cellData);
  return (
    <span className={`lhs-pill ${published ? "lhs-pill--pub" : "lhs-pill--draft"}`}>
      {published ? "Published" : "Draft"}
    </span>
  );
};

export default StatusCell;
