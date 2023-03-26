import { extendTheme } from '@chakra-ui/react';

import { TextStyles as Text } from './components/TextStyles';
import { HeadingStyles as Heading } from './components/HeadingStyles';
import { LinkStyles as Link } from './components/LinkStyles';
import { ButtonStyles as Button } from './components/ButtonStyles';
import { ImageStyles as Image } from './components/ImageStyles';
import { PopoverStyles as Popover } from './components/PopoverStyles';
import { ModalStyles as Modal } from './components/ModalStyles';
import { FormStyles as Form } from './components/FormStyles';
import { FormLabelStyles as FormLabel } from './components/FormLabelStyles';
import { FormErrorStyles as FormError } from './components/FormErrorStyles';
import { InputStyles as Input } from './components/InputStyles';
import { NumberInputStyles as NumberInput } from './components/NumberInputStyles';
import { PinInputStyles as PinInput } from './components/PinInputStyles';
import { TextareaStyles as Textarea } from './components/TextareaStyles';
import { SelectStyles as Select } from './components/SelectStyles';
import { TooltipStyles as Tooltip } from './components/TooltipStyles';
import { TagStyles as Tag } from './components/TagStyles';
import { MenuStyles as Menu } from './components/MenuStyles';
import { SkeletonStyles as Skeleton } from './components/SkeletonStyles';
import { TableStyles as Table } from './components/TableStyles';

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Roboto Slab',
    body: 'Roboto Mono',
  },
  colors: {
    brand: {
      dark: '#1a1a1a',
      gray: '#2c2c2c',
      ford: '#979797',
      lightGray: '#7a8893',
      shadow: '#C4C4C4',
      orange: '#EA6400',
    },
  },
  textStyles: {
    'brand-red-bg': {
      borderRadius: '7px',
      bgGradient: 'linear(to-r, brand.red.primary, brand.red.secondary)',
    },
    'brand-green-bg': {
      borderRadius: '7px',
      bgGradient: 'linear(to-r, brand.green.primary, brand.green.secondary)',
    },
  },
  layerStyles: {
    'brand-smoky': {
      bgColor: 'brand.gray.smoky',
    },
    'brand-umber': {
      bgColor: 'brand.gray.umber',
    },
    'brand-red': {
      bgGradient: 'linear(to-r, brand.red.primary, brand.red.secondary)',
    },
    'brand-green': {
      bgGradient: 'linear(to-r, brand.green.primary, brand.green.secondary)',
    },
    'brand-white-transparent': {
      bgGradient: 'linear(to-t, brand.gray.smoky 75%, transparent)',
    },
  },
  components: {
    Text,
    Heading,
    Link,
    Button,
    Image,
    Popover,
    Modal,
    Form,
    FormLabel,
    FormError,
    Input,
    NumberInput,
    PinInput,
    Textarea,
    Select,
    Tooltip,
    Tag,
    Menu,
    Skeleton,
    Table,
  },
});
