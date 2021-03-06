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
  outline: 0,
}

const theme = {
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
  },
  colors: {
    primary: '#FF007A',
    secondary: '#1FCDC3',
    text: '#45539C',
    heading: '#000469',
    background: '#fff',
    earlyDawn: '#FFF9E6',
  },
  button: {
    primary: {
      ...buttonBase,
      borderColor: 'primary',
      color: 'white',
      backgroundColor: 'primary',
      boxShadow: '0px 10px 20px rgba(255, 0, 122, 0.18), 0px 2px 6px rgba(255, 0, 122, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04)',
      '&:hover': {
        color: 'white'
      }
    },
    secondary: {
      color: 'blue'
    },
    outline: {
      ...buttonBase,
      borderColor: 'primary',
      color: 'primary',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'primary'
      },
    }
  },
  shadows: {
    base: '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    medium: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    large: '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)'
  },
  fontSizes: [11, 16, 28, 42, 56, 70],
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 1,
      fontSize: 1,
      color: 'text',
      '#__next': {
        overflow: 'hidden'
      },
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

export default theme