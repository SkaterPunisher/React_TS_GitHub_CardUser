import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SearchProps = DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
  hasError: boolean,
  onSubmit: (text: string) => void,
};
