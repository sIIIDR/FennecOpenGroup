import { tagAnatomy as parts } from '@chakra-ui/anatomy';

export const TagStyles = {
  parts: parts.keys,
  baseStyle: {},
  sizes: {},
  variants: {
    brand: {
      container: {
        borderRadius: '20px',
        color: 'white',
        bg: 'brand.gray.umber',
        _focus: {
          shadow: 'none',
        },
      },
    },
  },
  defaultProps: {
    variant: 'brand',
  },
};
