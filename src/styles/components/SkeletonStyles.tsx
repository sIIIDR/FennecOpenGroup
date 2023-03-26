export const SkeletonStyles = {
  baseStyle: {
    borderRadius: '7px',
    _focus: {
      shadow: 'none',
    },
  },
  sizes: {},
  variants: {
    'brand-white': {
      borderColor: 'brand.gray.white', // startColor
      background: 'brand.gray.skeleton', // endColor
    },
    'brand-smoky': {
      borderColor: 'brand.gray.smoky', // startColor
      background: 'brand.gray.skeleton', // endColor
    },
    'brand-light': {
      borderColor: 'brand.gray.light', // startColor
      background: 'brand.gray.smoky', // endColor
    },
    'brand-red-gradient': {
      borderColor: 'brand.red.primary', // startColor
      background: 'brand.red.secondary', // endColor
    },
    'brand-green-gradient': {
      borderColor: 'brand.green.primary', // startColor
      background: 'brand.green.secondary', // endColor
    },
  },
  defaultProps: {
    variant: 'brand-smoky',
  },
};
