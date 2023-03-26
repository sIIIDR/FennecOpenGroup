import { tableAnatomy as parts } from '@chakra-ui/anatomy';

export const TableStyles = {
  parts: parts.keys,
  baseStyle: {
    th: {
      fontFamily: 'Cera Pro',
      fontWeight: 'normal',
      textAlign: 'start',
      letterSpacing: null,
      textTransform: null,
    },
    td: {
      textAlign: 'start',
    },
    caption: {
      mt: 4,
      fontFamily: 'Cera Pro',
      fontWeight: 'normal',
      textAlign: 'start',
    },
  },
  sizes: {
    sm: {
      th: {
        px: '0',
        py: '1',
        lineHeight: '4',
        fontSize: 'sm',
      },
      td: {
        px: '0',
        py: '2',
        lineHeight: '4',
        fontSize: 'sm',
      },
      caption: {
        px: '0',
        py: '2',
        fontSize: 'lg',
      },
    },
    xs: {
      th: {
        px: '0',
        py: '0',
        lineHeight: '4',
        fontSize: 'xs',
      },
      td: {
        px: '0',
        py: '2',
        lineHeight: '4',
        fontSize: 'xs',
      },
      caption: {
        px: '0',
        py: '2',
        fontSize: 'md',
      },
    },
  },
  variants: {
    simple: {
      th: {
        color: 'brand.gray.dark',
        borderBottom: '1px',
        borderColor: 'brand.gray.smoky',
        '&[data-is-numeric=true]': {
          textAlign: 'end',
        },
      },
      td: {
        borderBottom: '1px',
        borderColor: 'brand.gray.smoky',
        '&[data-is-numeric=true]': {
          textAlign: 'end',
        },
      },
      caption: {
        color: 'brand.gray.umber',
      },
      tfoot: {
        tr: {
          '&:last-of-type': {
            th: { borderBottomWidth: 0 },
          },
        },
      },
    },
  },
  defaultProps: {},
};
