import { clsx } from 'clsx'
import { ButtonStopwatchProps } from './type'

import style from './style.module.css'

export function ButtonStopwatch({
  children,
  btnClickType,
  variant,
}: ButtonStopwatchProps) {
  const buttonStyle = (variant: string) => {
    return clsx({
      [style.button]: true,
      [style.button_start]: variant === 'start',
      [style.button_pause]: variant === 'pause',
      [style.button_stop]: variant === 'stop',
    })
  }

  return (
    <button className={buttonStyle(variant)} onClick={() => btnClickType()}>
      {children}
    </button>
  )
}
