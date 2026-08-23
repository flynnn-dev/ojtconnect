import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect
                x="6"
                y="14"
                width="28"
                height="18"
                rx="3"
                stroke="currentColor"
                strokeWidth="2.25"
            />
            <path
                d="M14 14v-2.5A5.5 5.5 0 0 1 19.5 6h1A5.5 5.5 0 0 1 26 11.5V14"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
            />
            <circle cx="14" cy="23" r="2.25" fill="currentColor" />
            <circle cx="26" cy="23" r="2.25" fill="currentColor" />
            <path
                d="M16.25 23h7.5"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
            />
        </svg>
    );
}
