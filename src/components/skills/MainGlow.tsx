import React from 'react'

export const MainGlow = () =>  {
  return (
    <div className="absolute -z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={432}
        height={160}
        viewBox="0 0 432 160"
        fill="none"
      >
        <g opacity="0.6" filter="url(#filter0_f_2044_9)">
          <path
            className="fill-blue-500"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_2044_9"
            x={0}
            y={0}
            width={432}
            height={160}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={32}
              result="effect1_foregroundBlur_2044_9"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
