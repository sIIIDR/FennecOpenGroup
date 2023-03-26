import { menuAnatomy as parts } from '@chakra-ui/anatomy';

export const MenuStyles = {
  parts: parts.keys,
  baseStyle: {
    button: {
      _hover: {
        WebkitTapHighlightColor: 'transparent',
      },
    },
    list: {
      border: '2px',
      borderColor: 'brand.orange',
      borderRadius: '0px',
      bg: 'brand.dark',
    },
    item: {
      p: 2,
      fontSize: 'sm',
      color: 'white',
      _focus: {
        bg: 'transparent',
      },
      _hover: {
        bg: 'brand.orange',
        WebkitTapHighlightColor: 'transparent',
      },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
