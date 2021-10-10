import {Space} from 'antd'
import React from 'react'
import {AppBarIcon} from './app-bar-icon'
import {CodeTwoTone} from '@ant-design/icons'

export const AppBar: React.FC = () => {
  return (
    <Space>
      <AppBarIcon>
        <CodeTwoTone style={{fontSize: '30px'}} />
      </AppBarIcon>
    </Space>
  )
}
