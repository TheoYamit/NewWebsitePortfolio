export function TerminalControlSvg({ size = 100 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 12" width={size}>
      <circle cx="6" cy="6" r="5" fill="#FF5F56"/>
      <path d="M4 4l4 4M8 4l-4 4" stroke="#420D0B" stroke-width="1" stroke-linecap="round"/>

      <circle cx="27" cy="6" r="5" fill="#FFBD2E"/>
      <line x1="25" y1="6" x2="29" y2="6" stroke="#4D3A11" stroke-width="1" stroke-linecap="round"/>
      
      <circle cx="48" cy="6" r="5" fill="#27C93F"/>
      <rect x="46" y="4" width="4" height="4" stroke="#0B3810" fill="none" stroke-width="1" rx="1"/>
    </svg>
  )
}