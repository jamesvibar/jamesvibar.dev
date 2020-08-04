import { darken } from '@theme-ui/color'

export default {
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
  },
  colors: {
    text: '#45539C',
    heading: '#000469',
    background: '#fff',
    primary: '#FF007A',
  },
  fontSizes: [11, 14, 28, 42, 56, 70],
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 1,
      color: 'text',
      'h1,h2,h3,h4,h5,h6': {
        fontFamily: 'heading',
        color: 'heading',
      },
      p: {
        lineHeight: 1.75,
      },
      a: {
        color: 'primary',
        transition: 'color 0.2s ease',
        '&:hover': {
          color: darken('primary', 0.1)
        }
      }
    },
  }
}

const defaultStyles = {

}