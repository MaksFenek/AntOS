import React from 'react'
import {Button} from 'antd'

import './app-bar-icon.scss'

export const AppBarIcon: React.FC = ({children}) => {
  return (
    <Button className="app-bar-icon" size="middle" type="text">
      {children}
    </Button>
  )
}
