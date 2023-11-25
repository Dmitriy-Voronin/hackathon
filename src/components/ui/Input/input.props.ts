import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string | null
  btns: boolean
  searchIcon?: React.ReactNode 
  value: string | undefined
  onClick?: () => void
}
