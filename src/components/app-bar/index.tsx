import React from 'react'
import {Space} from 'antd'
import {CodeTwoTone} from '@ant-design/icons'

import {AppBarIcon} from './App-bar-icon'

export const AppBar: React.FC = () => {
  return (
    <Space>
      <AppBarIcon>
        <CodeTwoTone style={{fontSize: '30px'}} />
      </AppBarIcon>
    </Space>
  )
}
