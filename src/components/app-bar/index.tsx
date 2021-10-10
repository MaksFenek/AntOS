import React from 'react'
import {Space} from 'antd'

import {AppBarIcon} from './App-bar-icon'
import {App} from 'src/redux/types'

interface IAppBar {
  apps: App[]
}

export const AppBar: React.FC<IAppBar> = ({apps}) => {
  return (
    <Space>
      {apps.map(app => (
        <AppBarIcon>{app.icon}</AppBarIcon>
      ))}
    </Space>
  )
}
