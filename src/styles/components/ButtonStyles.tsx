export const ButtonStyles = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    transitionDuration: '0.3s',
    borderRadius: '5px',
    _focus: {
      shadow: 'none',
    },
    _hover: {
      WebkitTapHighlightColor: 'transparent',
    },
  },
  sizes: {
    xs: {
      fontSize: ['xs'],
      px: [2, 3],
      py: 4,
    },
    sm: {
      fontSize: ['xs', 'sm'],
      px: [3, 4, 5, 6],
      py: 5,
    },
    md: {
      fontSize: ['sm', 'md'],
      px: [6, 7],
      py: 6,
    },
    link: {
      p: 0,
      fontSize: ['xs'],
      fontWeight: 'normal',
    },
    allIn: {
      fontSize: ['xs'],
      px: [2, 3],
      py: 4,
    },
  },
  variants: {
    'brand-transparent': {
      borderRadius: '0px',
      color: 'white',
      bg: 'transparent',
      _hover: {
        color: 'brand.orange',
      },
    },
    'brand-icon': {
      color: 'brand.ford',
      bg: 'transparent',
      _hover: {
        color: 'white',
      },
    },
    'brand-border': {
      bg: 'brand.orange',
      color: 'white',
      _hover: {
        color: 'brand.orange',
        bg: 'white',
      },
    },
    'brand-circle-border': {
      bg: 'brand.orange',
      color: 'black',
      border: '2px',
      borderColor: 'brand.orange',
      _hover: {
        color: 'brand.orange',
        bg: 'black',
      },
    },
    link: {
      color: 'white',
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'brand-transparent',
  },
};
