import React, {memo} from 'react'
import {MenuList} from '../MenuList'

import {animated, useSpring, config} from 'react-spring'

import './menu-window.scss'
interface IMenuWindow {
  closing: boolean
}

export const MenuWindow: React.FC<IMenuWindow> = memo(({closing = true}) => {
  const styles = useSpring({
    from: {
      height: '0vh',
      borderWidth: 0,
      opacity: 0,
    },
    to: {
      height: '60vh',
      borderWidth: 1,
      opacity: 1,
    },
    config: config.gentle,
    reverse: closing,
  })

  return (
    <animated.div style={styles} className="menu-window">
      <MenuList />
    </animated.div>
  )
})
