import React, {memo} from 'react'
import {Button, ButtonProps, Tooltip} from 'antd'
import Draggable, {ControlPosition} from 'react-draggable'

import './app-icon.scss'

interface IAppIcon extends ButtonProps {
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
    return (
      <Draggable
        defaultPosition={defaultPosition}
        handle=".app-icon"
        bounds={bounds}
        grid={[24, 24]}>
        <Button className="app-icon" size="large" {...props}>
          <Tooltip title={name}>{children}</Tooltip>
        </Button>
      </Draggable>
    )
  },
)
