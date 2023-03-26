import { selectAnatomy as parts } from '@chakra-ui/anatomy';

export const SelectStyles = {
  parts: parts.keys,
  baseStyle: {},
  sizes: {},
  variants: {
    'brand-table': {
      field: {
        borderRadius: '20px',
        fontSize: 'xs',
        color: 'brand.gray.dark',
        bg: 'brand.gray.smoky',
        _focus: {
          shadow: 'none',
        },
      },
    },
  },
  defaultProps: {},
};
