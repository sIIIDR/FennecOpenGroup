import { numberInputAnatomy as parts } from '@chakra-ui/anatomy';

export const NumberInputStyles = {
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
        borderRadius: '20px',
        fontSize: 'sm',
        color: 'brand.gray.dark',
        bg: 'brand.gray.smoky',
        _focus: {
          boxShadow: 'inner',
        },
      },
    },
    'brand-swap': {
      field: {
        borderRadius: '20px',
        fontSize: 'sm',
        color: 'brand.gray.umber',
        bg: 'brand.gray.white',
        _focus: {
          boxShadow: 'inner',
        },
      },
    },
  },
  defaultProps: { size: 'sm' },
};
