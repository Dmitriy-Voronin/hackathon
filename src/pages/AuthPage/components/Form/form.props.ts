import { ReactNode } from 'react'

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  children?: ReactNode
}
