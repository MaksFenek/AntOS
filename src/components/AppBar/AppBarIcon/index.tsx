import React from 'react'
import {Button, ButtonProps} from 'antd'

import './app-bar-icon.scss'

export const AppBarIcon: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <Button className="app-bar-icon" size="middle" type="text" {...props}>
      {children}
    </Button>
  )
}
