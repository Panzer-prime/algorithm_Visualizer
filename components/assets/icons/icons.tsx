import * as React from "react";
import { SVGProps } from "react";

export const Pause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={4}
      height={14}
      x={6}
      y={5}
      stroke="#222"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={4}
      height={14}
      x={14}
      y={5}
      stroke="#222"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
  </svg>
);

export const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.211 11.106 9.737 7.868A1.2 1.2 0 0 0 8 8.942v6.116a1.2 1.2 0 0 0 1.737 1.074l6.474-3.238a1 1 0 0 0 0-1.788Z"
    />
  </svg>
);

export const Refresh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke="#33363F" strokeWidth={2} d="m14 15-4 4 4 4" />
    <path
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5.938 15.5A7 7 0 1 1 12 19"
    />
  </svg>
);

export const Play_and_stop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#222"
      d="m12.573 12.874 6.833 3.796a.4.4 0 0 0 .594-.35V7.68a.4.4 0 0 0-.594-.35l-6.832 3.796a1 1 0 0 0 0 1.748Z"
    />
    <path
      stroke="#222"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 7v10M4 7v10"
    />
  </svg>
);

export const SpeedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={14} r={8} stroke="#33363F" strokeWidth={2} />
    <path
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 14v-3m5.5-3.5L19 6m-8.932-3.63c.114-.106.365-.2.715-.267A6.68 6.68 0 0 1 12 2c.44 0 .868.036 1.217.103.35.067.6.161.715.268"
    />
  </svg>
);
