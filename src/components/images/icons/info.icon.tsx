import { IconProps } from './type'

export default function InfoIcon({ size = 20, color = 'currentColor' }: IconProps) {
  return (
    <svg
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      xmlns="http://www.w3.org/2000/svg"
      id="info"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 -960 960 960"
      fill={color}
    >
      <path d="M440.41-284.41h79.18V-528h-79.18v243.59Zm39.38-310.81q17.24 0 29.12-11.66 11.87-11.67 11.87-28.91 0-17.24-11.66-29.12-11.67-11.87-28.91-11.87-17.24 0-29.12 11.66-11.87 11.67-11.87 28.91 0 17.24 11.66 29.12 11.67 11.87 28.91 11.87Zm.49 507.35q-81.19 0-152.62-30.62-71.44-30.62-125-84.17-53.55-53.56-84.17-124.95Q87.87-399 87.87-480.46q0-81.45 30.62-152.38 30.62-70.94 84.17-124.5 53.56-53.55 124.95-84.17 71.39-30.62 152.85-30.62 81.45 0 152.38 30.62 70.94 30.62 124.5 84.17 53.55 53.56 84.17 124.72 30.62 71.16 30.62 152.34 0 81.19-30.62 152.62-30.62 71.44-84.17 125-53.56 53.55-124.72 84.17-71.16 30.62-152.34 30.62Zm-.28-83q129.04 0 219.09-90.04 90.04-90.05 90.04-219.09 0-129.04-90.04-219.09-90.05-90.04-219.09-90.04-129.04 0-219.09 90.04-90.04 90.05-90.04 219.09 0 129.04 90.04 219.09 90.05 90.04 219.09 90.04ZM480-480Z" />
    </svg>
  )
}
