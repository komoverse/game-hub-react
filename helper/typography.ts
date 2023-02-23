export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

type SizeProps = {
  sm: number;
  md: number;
  lg: number;
};

export function responsiveFontSizes({ sm, md, lg }: SizeProps) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}
