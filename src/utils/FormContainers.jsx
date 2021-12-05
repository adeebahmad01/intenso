import React from "react";

export const SmallContainer = (p) => (
  <div
    {...p}
    className={`bg-white rounded shadow-lg p-4 ${p.className}`}
    style={{ width: `100%`, maxWidth: 450, ...p.style }}
  />
);

export const LargeContainer = (p) => (
  <div
    {...p}
    className={`bg-white rounded shadow-lg p-4 ${p.className}`}
    style={{ width: `100%`, maxWidth: 850, ...p.style }}
  />
);
