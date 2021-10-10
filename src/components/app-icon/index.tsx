import React from 'react'
import {Button, ButtonProps} from 'antd'

import './appicon.scss'

export const AppIcon: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <Button className="app-icon" size="large" {...props}>
      {children}
    </Button>
  )
}
