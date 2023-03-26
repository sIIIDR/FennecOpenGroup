import { inputAnatomy as parts } from '@chakra-ui/anatomy';

export const InputStyles = {
  parts: parts.keys,
  baseStyle: {
    field: {
      borderRadius: '20px',
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    xs: {
      fontSize: 'xs',
    },
  },
  variants: {
    'brand-auth': {
      field: {
        borderRadius: '20px',
        fontSize: 'sm',
        color: 'brand.gray.dark',
        bg: 'brand.gray.smoky',
        _focus: {
          boxShadow: 'inner',
        },
      },
    },
    'brand-registration': {
      field: {
        borderRadius: '20px',
        fontSize: 'sm',
        color: 'brand.gray.dark',
        bg: 'brand.gray.smoky',
        _focus: {
          boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.15)',
        },
      },
    },
    'brand-support': {
      field: {
        borderRadius: '5px',
        border: '1px',
        borderColor: 'white',
        fontSize: 'sm',
        color: 'white',
        bg: 'transparent',
        _focus: {
          boxShadow: 'inner',
        },
      },
    },
  },
  defaultProps: { size: 'sm' },
};
