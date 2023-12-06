import React from "react";

export default function Products({
  width = 18,
  height = 18,
  fill = "#273039",
}: {
  width?: number;
  height?: number;
  fill?: string;
  [x: string]: any;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 5.625L9 2.25L3 5.625M15 5.625V12.375L9 15.75M15 5.625L9 9M9 15.75L3 12.375V5.625M9 15.75V9M3 5.625L9 9"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
