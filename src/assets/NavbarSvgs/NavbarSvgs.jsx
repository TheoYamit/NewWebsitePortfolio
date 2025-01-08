export function HomeSvg({ width = 50, height = 50, isActiveItem }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-gray-700"
    >
      <path d="M5 12L12 5L19 12V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V12Z" />
      <rect x="10" y="14" width="4" height="6" />
    </svg>
  )
};

export function ProjectSvg({ width = 50, height = 50, isActiveItem }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={isActiveItem === "projects" ? "#9EDDFF" : "none"}
      stroke={isActiveItem == "projects" ? "#6499E9" : "currentColor"}
      strokeWidth="2"
      className="text-gray-700"
    >
      <path d="M4 5C4 4.44772 4.44772 4 5 4H9L11 6H19C19.5523 6 20 6.44772 20 7V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="16" y2="15" />
    </svg>
  )
}

export function ProgressSvg({ width = 50, height = 50, isActiveItem }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={`${isActiveItem == "progress" ? "#DDFFBC" : "none"}`}
      stroke={`${isActiveItem == "progress" ? "#91C788" : "currentColor"}`}
      strokeWidth="2"
      className="text-gray-700"
    >
      <rect x="4" y="4" width="16" height="16" rx="1" />

      <line x1="8" y1="16" x2="8" y2="12" />
      <line x1="12" y1="16" x2="12" y2="8" />
      <line x1="16" y1="16" x2="16" y2="6" />
    </svg>
  )
};

export function ContactSvg({ width = 50, height = 50, isActiveItem }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={`${isActiveItem == "contact" ? "#FFD65A" : "none"}`}
      stroke={`${isActiveItem == "contact" ? "#FF9D23" : "currentColor"}`}
      strokeWidth="2"
      className="text-gray-700"
    >
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M4 9l8 6 8-6" />
    </svg>
  )
};

