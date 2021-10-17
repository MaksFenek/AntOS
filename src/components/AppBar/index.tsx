import React, {memo} from 'react'
import {Space} from 'antd'

import {AppBarIcon} from './AppBarIcon'
import {App} from 'src/redux/types'

interface IAppBar {
  apps: App[]
  onClick: (name: string) => void
}

export const AppBar: React.FC<IAppBar> = memo(({apps, onClick}) => {
  return (
    <Space>
      {apps.map(app => (
        <AppBarIcon key={app.name} onClick={() => onClick(app.name)}>
          {app.icon}
        </AppBarIcon>
      ))}
    </Space>
  )
})
