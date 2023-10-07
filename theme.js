import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// color mode config
const config = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'Nunito',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base'
    },
    // a: {
    //   color: mode('blue.500', 'blue.300')(props),
    // },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
}

const colors = {
  brand: {
    50: '#FC8181',
    100: '#FC8181',
    200: '#FC8181',
    300: '#FC8181',
    400: '#FC8181',
    500: '#C53030', // you need this
    600: '#FC8181',
    700: '#FC8181',
    800: '#FC8181',
    900: '#FC8181',
  }
}

const theme = extendTheme({ config, styles, colors })

export default theme