import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    darkBlue: '#1a365d',
    white: "#FFFFFF",
    800: '#153e75',
    700: '#2a69ac',
  },
  fonts: {
    heading: "Noto Sans",
    body: "Arial",
  },
}

export default extendTheme({ colors })
