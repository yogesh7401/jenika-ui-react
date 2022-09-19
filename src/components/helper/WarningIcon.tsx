import React from 'react';
import { SVGProps } from 'react';

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
