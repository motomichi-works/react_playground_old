const styledComponentUtils = {
  mq: {
    lg: 'only screen and (max-width:1199.98px)',
    md: 'only screen and (max-width:991.98px)',
    sm: 'only screen and (max-width:767.98px)',
    xs: 'only screen and (max-width:575.98px)',
  },
  fontSize: (size: number) => `font-size: ${size / 16}rem;`,
} as const;

export default styledComponentUtils;
