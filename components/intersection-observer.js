import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const IntersectionContext = React.createContext({ inView: false })

export const IntersectionObserver = ({ children, options }) => {
  const [ref, inView, entry] = useInView({
    threshold: .5,
    ...options
  })

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={ref}>{children({ inView })}</div>
    </IntersectionContext.Provider>
  )
}