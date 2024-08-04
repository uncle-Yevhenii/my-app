import { IconProps } from './type'

export default function closeIcon({ size = 20, color = 'currentColor' }: IconProps) {
  return (
    <svg
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 -960 960 960"
      fill={color}
    >
      <path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z" />
    </svg>
  )
}
