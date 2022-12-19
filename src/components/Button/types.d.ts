import React from 'react';
export const BVariant = {
  primary: 'primary',
  secondary: 'secondary',
  outlined: 'outlined',
  text: 'text',
  link: 'link',
  pill: 'pill',
};
export type Bprops = {
  variant: BVariantProps['variant'];
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};
export type BVariantProps = {
  variant: keyof typeof BVariant;
};
