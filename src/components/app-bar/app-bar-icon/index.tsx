import {Button} from 'antd'
import React from 'react'

export const AppBarIcon: React.FC = ({children}) => {
  return (
    <Button className="app-bar-icon" size="middle" type="text">
      {children}
    </Button>
  )
}
