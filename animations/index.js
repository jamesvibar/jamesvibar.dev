export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
    translateY: 60,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
}

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    translateX: -60,
  },
  visible: {
    opacity: 1,
    translateX: 0,
  },
}

export const fadeInRight = {
  hidden: {
    opacity: 0,
    translateX: 60,
  },
  visible: {
    opacity: 1,
    translateX: 0,
  },
}


export const staggerFadeInUp = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } }
}
