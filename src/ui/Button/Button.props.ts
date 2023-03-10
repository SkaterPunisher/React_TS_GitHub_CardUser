import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ButtonProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { 
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  }