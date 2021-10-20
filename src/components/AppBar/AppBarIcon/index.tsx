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
        x: 0,
      },
      x: 1,
      reverse: !isOpen,
      config: config.default,
    })

    return (
      <animated.div
        style={{
          transform: styles.x
            .to([0, 0.5, 0.75, 1], [0, 0.75, 1.2, 1])
            .to(x => `scale(${x})`),
          padding: styles.x
            .to([0, 0.45, 0.75, 1], [1, 2, 3, 4])
            .to(x => `0 ${x}px`),
          width: styles.x
            .to([0, 0.45, 0.75, 1], [0, 12, 25, 38])
            .to(x => `${x}px`),
        }}>
        <Button className="app-bar-icon" size="middle" type="text" {...props}>
          {children}
        </Button>
      </animated.div>
    )
  },
)
