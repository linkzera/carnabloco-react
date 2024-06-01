import { SVGProps } from "react"

export const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 8.672C4.5 4.679 7.895 1.5 12 1.5s7.5 3.179 7.5 7.172c0 2.251-1.217 5.036-2.55 7.444-1.354 2.443-2.912 4.644-3.748 5.773a1.49 1.49 0 0 1-2.404 0c-.836-1.13-2.394-3.331-3.748-5.775C5.717 13.706 4.5 10.92 4.5 8.672ZM12 3C8.652 3 6 5.577 6 8.672c0 1.828 1.033 4.314 2.363 6.715 1.306 2.359 2.819 4.499 3.637 5.605.818-1.105 2.331-3.245 3.637-5.603C16.967 12.988 18 10.502 18 8.672 18 5.577 15.348 3 12 3Z"
      fill="#E45858"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM9 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      fill="#E45858"
    />
  </svg>
)