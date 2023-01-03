import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type ContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { 
    children: ReactNode
  }