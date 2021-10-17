import React, {memo} from 'react'
import {Button, ButtonProps} from 'antd'

import './app-bar-icon.scss'

export const AppBarIcon: React.FC<ButtonProps> = memo(
  ({children, ...props}) => {
    return (
      <Button className="app-bar-icon" size="middle" type="text" {...props}>
        {children}
      </Button>
    )
  },
)
