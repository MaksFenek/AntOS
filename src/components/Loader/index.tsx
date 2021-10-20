import React, {Suspense} from 'react'
import {Spin} from 'antd'
import {animated, useSpring, config} from '@react-spring/web'

import './loader.scss'

export const Loader: React.FC = ({children}) => {
  const styles = useSpring({
    from: {
      transform: 'scale(0)',
      opacity: 0.5,
    },
    to: {
      transform: 'scale(2)',
      opacity: 1,
    },
    config: config.gentle,
    delay: 450,
  })
  return (
    <Suspense
      fallback={
        <animated.div className="loader" style={styles}>
          <Spin size="large" />
        </animated.div>
      }>
      {children}
    </Suspense>
  )
}
