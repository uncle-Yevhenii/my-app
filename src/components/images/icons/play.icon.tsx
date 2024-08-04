import { IconProps } from './type'

export default function PlayIcon({ size = 20, color = 'currentColor' }: IconProps) {
  return (
    <svg
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 -960 960 960"
      fill={color}
    >
      <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
    </svg>
  )
}
