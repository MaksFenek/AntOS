import React, {memo} from 'react'
import {Button, ButtonProps} from 'antd'

import './app-bar-icon.scss'
import {useSpring} from '@react-spring/core'
import {animated, config} from '@react-spring/web'
import {useCursor} from 'src/hooks'

interface IAppBarIcon extends ButtonProps {
  isOpen: boolean
}

export const AppBarIcon: React.FC<IAppBarIcon> = memo(
  ({children, isOpen, ...props}) => {
    const [className, onMouseEnter, onMouseMove, onMouseLeave] = useCursor()
    const styles = useSpring({
      from: {
        transform: 'scale(0)',
        padding: '0px',
        width: '0px',
      },
      to: {
        transform: 'scale(1)',
        padding: '3px',
        width: '38px',
      },
      reverse: !isOpen,
      config: config.gentle,
    })

    return (
      <animated.div
        style={styles}
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}>
        <Button className="app-bar-icon" size="middle" type="text" {...props}>
          {children}
        </Button>
      </animated.div>
    )
  },
)
