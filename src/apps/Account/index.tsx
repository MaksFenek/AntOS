import React from 'react'
import {App} from 'src/containers/App'
import {SmileTwoTone} from '@ant-design/icons'

const AccountAppContent = React.lazy(() => import('./content'))

export const AccountApp: React.FC = () => {
  return (
    <App
      name="Account"
      icon={<SmileTwoTone style={{fontSize: '30px'}} />}
      window={<AccountAppContent />}
      defaultPosition={{x: 90, y: 0}}
    />
  )
}
