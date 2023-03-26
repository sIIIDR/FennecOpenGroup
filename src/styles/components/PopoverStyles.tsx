import { popoverAnatomy as parts } from '@chakra-ui/anatomy';

export const PopoverStyles = {
  parts: parts.keys,
  baseStyle: {
    popper: {
      px: 4,
    },
    content: {
      border: 'none',
      borderRadius: '20px',
      _focus: {
        shadow: '-4px 5px 25px -5px #C4C4C4',
      },
    },
  },
  sizes: {
    brand: {
      popper: {
        m: 0,
      },
      content: {
        p: '10px',
      },
    },
  },
  variants: {
    'brand-with-shadow': {
      content: {
        shadow: '-4px 5px 25px -5px #C4C4C4',
      },
    },
  },
  defaultProps: {
    size: 'brand',
    variant: 'brand-with-shadow',
  },
};
