import React from 'react'
import {Button, ButtonProps} from 'antd'
import Draggable, {ControlPosition} from 'react-draggable'

import './appicon.scss'

interface IAppIcon extends ButtonProps {
  defaultPosition?: ControlPosition
  bounds?: string
}

export const AppIcon: React.FC<IAppIcon> = ({
  children,
  defaultPosition,
  bounds = '.desktop-content',
  ...props
}) => {
  return (
    <Draggable
      defaultPosition={defaultPosition}
      handle=".app-icon"
      bounds={bounds}
      grid={[24, 24]}>
      <Button className="app-icon" size="large" {...props}>
        {children}
      </Button>
    </Draggable>
  )
}
