import React from 'react'
import {Layout, Space} from 'antd'

import './menuwindow.scss'

const {Sider, Content} = Layout

export const MenuWindow: React.FC = ({children}) => {
  return (
    <Layout className="menu-window">
      <Sider className="menu-window__sider">
        <Space align="center"></Space>
      </Sider>
      <Content className="menu-window__content">{children}</Content>
    </Layout>
  )
}
