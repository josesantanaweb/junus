import React from "react";

export default function RealState({
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
        d="M15 15.75H12.75V14.25H15V15.75ZM15 12.75H12.75V11.25H15V12.75ZM15 9.75H12.75V8.25H15V9.75ZM18 5.85C17.7 3.375 15.6 1.5 13.125 1.5C11.85 1.5 10.575 2.025 9.675 2.925C9.15 3.45 8.775 3.975 8.55 4.65L11.7 6.75H16.5V16.5H18V5.85ZM9.975 5.25C10.425 3.9 11.7 3 13.125 3C14.55 3 15.825 3.9 16.275 5.25H9.975ZM5.625 4.5L0 8.25V16.5H11.25V8.25L5.625 4.5ZM9.75 15H7.5V10.5H3.75V15H1.5V9L5.625 6.375L9.75 9V15Z"
        fill={fill}
      />
    </svg>
  );
}
