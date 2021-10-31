import {config, useSpring} from '@react-spring/core'
import {animated} from '@react-spring/web'
import React, {memo} from 'react'
import Draggable, {ControlPosition} from 'react-draggable'
import {useCursor} from 'src/hooks'

import './app-icon.scss'

interface IAppIcon extends React.HTMLAttributes<HTMLDivElement> {
  defaultPosition?: ControlPosition
  bounds?: string
  name?: string
}

export const AppIcon: React.FC<IAppIcon> = memo(
  ({
    children,
    defaultPosition,
    bounds = '.desktop-content',
    name,
    ...props
  }) => {
    const [className, onMouseEnter, onMouseMove, onMouseLeave] = useCursor()
    const styles = useSpring({
      from: {
        transform: 'scale(0)',
      },
      to: {
        transform: 'scale(1)',
      },
      delay: 300,
      config: config.gentle,
    })
    return (
      <Draggable
        defaultPosition={defaultPosition}
        handle=".app-icon__handle"
        bounds={bounds}>
        <div className="app-icon__handle">
          <animated.div style={styles} className="app-icon" {...props}>
            <div
              className={className}
              onMouseEnter={onMouseEnter}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}>
              {children}
            </div>
          </animated.div>
          <animated.span style={styles} className="app-icon__name">
            {name}
          </animated.span>
        </div>
      </Draggable>
    )
  },
)
