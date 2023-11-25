import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styles from './button.module.css'

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({
  children,
  className,
  ...props
}: IButtonProps) => {

  return (
      <button className={[styles.button, className].join(' ')} {...props}>
        {children}
      </button>
  )
}
