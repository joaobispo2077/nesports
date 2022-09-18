import { FunctionComponent, InputHTMLAttributes } from 'react';

export const Input: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => (
  <input
    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
    {...props}
  />
);
