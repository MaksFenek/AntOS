import React from 'react'
import {Layout} from 'antd'

import './menu-window.scss'
import {MenuListContainer} from 'src/containers/MenuListContainer'

const {Sider, Content} = Layout

export const MenuWindow: React.FC = ({children}) => {
  return (
    <Layout className="menu-window">
      <Sider className="menu-window__sider">
        <MenuListContainer />
      </Sider>
      <Content className="menu-window__content">{children}</Content>
    </Layout>
  )
}
