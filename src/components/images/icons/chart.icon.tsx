import { IconProps } from './type'

export default function ChartIcon({ size = 20, color = 'currentColor' }: IconProps) {
  return (
    <svg
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      xmlns="http://www.w3.org/2000/svg"
      id="chart"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 -960 960 960"
      fill={color}
    >
      <path d="M147-229.35 88.35-288 384-583.65l156.52 155.52 269-302 62.13 55.65-327.17 368.61L384-466.35l-237 237Z" />
    </svg>
  )
}
