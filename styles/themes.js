import { extendTheme } from '@chakra-ui/react'

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors:{
    brand: {
      darkblue: "#1B2837",
      white: "#FFFFFF",
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fonts: {
    heading: "Noto Sans",
    body: "Arial",
  },
  global: {
    'html, body': {
      color: '#214B6B',
      lineHeight: 'tall',
    },
    a: {
      color: 'teal.500',
    },
  },
})

export default theme
