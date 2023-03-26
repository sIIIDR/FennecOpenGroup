import { modalAnatomy as parts } from '@chakra-ui/anatomy';

export const ModalStyles = {
  parts: parts.keys,
  baseStyle: {
    dialogContainer: {
      px: 4,
    },
    dialog: {
      border: 'none',
      borderRadius: '0px',
      shadow: 'none',
    },
    header: {
      display: 'flex',
      color: 'white',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      color: 'white',
    },
    footer: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    closeButton: {
      borderRadius: 'full',
      color: 'white',
      bgSize: '300% 100%',
      bgGradient: 'linear(to-r, brand.red.primary, brand.red.secondary, brand.red.primary, brand.red.secondary)',
      transitionProperty: 'all',
      transitionDuration: '0.5s',
      _disabled: {
        color: 'white',
        bgSize: '300% 100%',
        bgGradient: 'linear(to-r, brand.red.primary, brand.red.secondary, brand.red.primary, brand.red.secondary)',
      },
      _hover: {
        bgPosition: '50% 0',
        _disabled: {
          color: 'white',
          bgSize: '300% 100%',
          bgGradient: 'linear(to-r, brand.red.primary, brand.red.secondary, brand.red.primary, brand.red.secondary)',
          bgPosition: '50% 0',
        },
      },
      _focus: {
        shadow: 'none',
      },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
