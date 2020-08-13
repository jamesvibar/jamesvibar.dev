import { darken } from '@theme-ui/color'

const buttonBase = {
  padding: '12px 19px',
  borderRadius: 3,
  border: '1px solid',
  borderColor: 'transparent',
  background: 'transparent',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  letterSpacing: 2,
  display: 'inline-block',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: 1,
}

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
    earlyDawn: '#FFF9E6',
  },
  button: {
    primary: {
      ...buttonBase,
      borderColor: 'primary',
      color: 'white',
      backgroundColor: 'primary'
    },
    secondary: {
      color: 'blue'
    },
    outline: {
      ...buttonBase,
      borderColor: 'primary',
      color: 'primary',
      backgroundColor: 'transparent'
    }
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
      },
    },
  }
}
