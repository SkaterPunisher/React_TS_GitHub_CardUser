import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type SearchProps = {
  hasError: boolean;
  onSubmit: (text: string) => void;
};
