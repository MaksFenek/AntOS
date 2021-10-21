import React, {memo} from 'react'
import {Button, ButtonProps} from 'antd'

import './app-bar-icon.scss'
import {useSpring} from '@react-spring/core'
import {animated, config} from '@react-spring/web'

interface IAppBarIcon extends ButtonProps {
  isOpen: boolean
}

export const AppBarIcon: React.FC<IAppBarIcon> = memo(
  ({children, isOpen, ...props}) => {
    const styles = useSpring({
      from: {
        transform: 'scale(0)',
        padding: '0px',
        width: '0px',
      },
      to: {
        transform: 'scale(1)',
        padding: '4px',
        width: '38px',
      },
      reverse: !isOpen,
      config: config.gentle,
    })

    return (
      <animated.div style={styles}>
        <Button className="app-bar-icon" size="middle" type="text" {...props}>
          {children}
        </Button>
      </animated.div>
    )
  },
)
