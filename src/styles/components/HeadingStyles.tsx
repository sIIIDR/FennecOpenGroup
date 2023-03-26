export const HeadingStyles = {
  baseStyle: {
    color: 'white',
  },
  sizes: {
    xs: {
      fontSize: 'xs',
    },
    sm: {
      fontSize: 'sm',
    },
  },
  variants: {
    'brand-logo': {
      color: 'white',
      bg: 'transparent',
      _hover: {
        bgGradient: 'linear(to-r,  #FA9836, #00B6EC)',
        bgClip: 'text',
      },
    },
  },
  defaultProps: {
    size: 'sm',
  },
};
