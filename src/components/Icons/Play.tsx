import React from "react";

export default function Play({
  width = 20,
  height = 20,
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM12.8469 9.47969L9.09688 6.97969C9.00273 6.91687 8.89329 6.8808 8.78025 6.87533C8.6672 6.86985 8.55479 6.89517 8.45501 6.94859C8.35523 7.00201 8.27183 7.08152 8.21371 7.17863C8.15559 7.27575 8.12493 7.38682 8.125 7.5V12.5C8.12493 12.6132 8.15559 12.7243 8.21371 12.8214C8.27183 12.9185 8.35523 12.998 8.45501 13.0514C8.55479 13.1048 8.6672 13.1301 8.78025 13.1247C8.89329 13.1192 9.00273 13.0831 9.09688 13.0203L12.8469 10.5203C12.9326 10.4633 13.0029 10.3859 13.0515 10.2951C13.1002 10.2044 13.1256 10.103 13.1256 10C13.1256 9.89702 13.1002 9.79564 13.0515 9.70487C13.0029 9.61409 12.9326 9.53674 12.8469 9.47969ZM9.375 11.332V8.67188L11.3734 10L9.375 11.332Z"
        fill={fill}
      />
    </svg>
  );
}
