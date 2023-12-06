import React from "react";

export default function LinkedIn({
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
        d="M15.1875 1.6875H2.8125C2.51413 1.6875 2.22798 1.80603 2.017 2.017C1.80603 2.22798 1.6875 2.51413 1.6875 2.8125V15.1875C1.6875 15.4859 1.80603 15.772 2.017 15.983C2.22798 16.194 2.51413 16.3125 2.8125 16.3125H15.1875C15.4859 16.3125 15.772 16.194 15.983 15.983C16.194 15.772 16.3125 15.4859 16.3125 15.1875V2.8125C16.3125 2.51413 16.194 2.22798 15.983 2.017C15.772 1.80603 15.4859 1.6875 15.1875 1.6875ZM15.1875 15.1875H2.8125V2.8125H15.1875V15.1875ZM6.75 7.875V12.375C6.75 12.5242 6.69074 12.6673 6.58525 12.7727C6.47976 12.8782 6.33668 12.9375 6.1875 12.9375C6.03832 12.9375 5.89524 12.8782 5.78975 12.7727C5.68426 12.6673 5.625 12.5242 5.625 12.375V7.875C5.625 7.72582 5.68426 7.58274 5.78975 7.47725C5.89524 7.37176 6.03832 7.3125 6.1875 7.3125C6.33668 7.3125 6.47976 7.37176 6.58525 7.47725C6.69074 7.58274 6.75 7.72582 6.75 7.875ZM12.9375 9.84375V12.375C12.9375 12.5242 12.8782 12.6673 12.7727 12.7727C12.6673 12.8782 12.5242 12.9375 12.375 12.9375C12.2258 12.9375 12.0827 12.8782 11.9773 12.7727C11.8718 12.6673 11.8125 12.5242 11.8125 12.375V9.84375C11.8125 9.47079 11.6643 9.1131 11.4006 8.84938C11.1369 8.58566 10.7792 8.4375 10.4062 8.4375C10.0333 8.4375 9.6756 8.58566 9.41188 8.84938C9.14816 9.1131 9 9.47079 9 9.84375V12.375C9 12.5242 8.94074 12.6673 8.83525 12.7727C8.72976 12.8782 8.58668 12.9375 8.4375 12.9375C8.28832 12.9375 8.14524 12.8782 8.03975 12.7727C7.93426 12.6673 7.875 12.5242 7.875 12.375V7.875C7.8757 7.73722 7.92694 7.60449 8.01901 7.50198C8.11108 7.39947 8.23757 7.33432 8.37448 7.31889C8.5114 7.30346 8.64922 7.33881 8.76179 7.41825C8.87437 7.49768 8.95388 7.61568 8.98523 7.74984C9.36576 7.49171 9.80941 7.3421 10.2685 7.31708C10.7277 7.29207 11.185 7.39259 11.5913 7.60786C11.9976 7.82312 12.3376 8.145 12.5748 8.53892C12.8119 8.93284 12.9373 9.38393 12.9375 9.84375ZM7.03125 5.90625C7.03125 6.07313 6.98177 6.23626 6.88905 6.37501C6.79634 6.51377 6.66456 6.62191 6.51039 6.68577C6.35621 6.74963 6.18656 6.76634 6.02289 6.73379C5.85922 6.70123 5.70888 6.62087 5.59088 6.50287C5.47288 6.38487 5.39252 6.23453 5.35996 6.07086C5.32741 5.90719 5.34412 5.73754 5.40798 5.58336C5.47184 5.42919 5.57998 5.29741 5.71874 5.2047C5.85749 5.11198 6.02062 5.0625 6.1875 5.0625C6.41128 5.0625 6.62589 5.15139 6.78412 5.30963C6.94236 5.46786 7.03125 5.68247 7.03125 5.90625Z"
        fill={fill}
      />
    </svg>
  );
}
