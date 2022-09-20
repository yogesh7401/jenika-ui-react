import React, { SVGProps } from 'react';

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
      ></path>
    </svg>
  );
}

export function DangerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M8.25 21L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21Zm.85-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8Zm.05-2.75L12 13.4l2.85 2.85l1.4-1.4L13.4 12l2.85-2.85l-1.4-1.4L12 10.6L9.15 7.75l-1.4 1.4L10.6 12l-2.85 2.85ZM12 12Z"
      ></path>
    </svg>
  );
}

export function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
      ></path>
    </svg>
  );
}

export function SuccessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012L24 4Z"></path>
        <path d="m17 24l5 5l10-10"></path>
      </g>
    </svg>
  );
}

export function WarningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z"
      ></path>
      <path fill="currentColor" d="M13 16h-2v2h2zm0-6h-2v5h2z"></path>
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
      ></path>
    </svg>
  );
}

export function SuccessOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <mask id="svgIDa">
        <g
          fill="#22c55e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        >
          <path
            fill="#22c55e"
            stroke="#22c55e"
            d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012L24 4Z"
          ></path>
          <path stroke="#000" d="m17 24l5 5l10-10"></path>
        </g>
      </mask>
      <path fill="#22c55e" d="M0 0h48v48H0z" mask="url(#svgIDa)"></path>
    </svg>
  );
}

export function InfoOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#60a5fa"
        d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
      ></path>
    </svg>
  );
}

export function DangerOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#ef4444"
        d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8zm-4.17-7.14L12 10.59L9.17 7.76L7.76 9.17L10.59 12l-2.83 2.83l1.41 1.41L12 13.41l2.83 2.83l1.41-1.41L13.41 12l2.83-2.83l-1.41-1.41z"
      ></path>
    </svg>
  );
}

export function WarningOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#f97316"
        d="M1 21L12 2l11 19Zm3.45-2h15.1L12 6ZM12 18q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Zm-1-3h2v-5h-2Zm1-2.5Z"
      ></path>
    </svg>
  );
}
