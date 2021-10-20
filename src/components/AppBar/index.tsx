import React, {memo} from 'react'
import {AppBarIcon} from './AppBarIcon'
import {App} from 'src/redux/types'

interface IAppBar {
  apps: App[]
  onClick: (name: string) => void
}

export const AppBar: React.FC<IAppBar> = memo(({apps, onClick}) => {
  return (
    <div style={{display: 'flex'}}>
      {apps.map(app => (
        <AppBarIcon
          key={app.name}
          isOpen={app.isOpen}
          onClick={() => onClick(app.name)}>
          {app.icon}
        </AppBarIcon>
      ))}
    </div>
  )
})
