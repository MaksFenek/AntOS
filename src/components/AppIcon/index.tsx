import React, {memo} from 'react'
import Draggable, {ControlPosition} from 'react-draggable'

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
    return (
      <Draggable
        defaultPosition={defaultPosition}
        handle=".app-icon__handle"
        bounds={bounds}>
        <div className="app-icon__handle">
          <div className="app-icon" {...props}>
            {children}
          </div>
          <span className="app-icon__name">{name}</span>
        </div>
      </Draggable>
    )
  },
)
