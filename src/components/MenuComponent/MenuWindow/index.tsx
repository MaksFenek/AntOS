import React from 'react'
import {Layout, LayoutProps} from 'antd'

import './menu-window.scss'
import {MenuListContainer} from 'src/containers/MenuListContainer'

const {Sider, Content} = Layout

export const MenuWindow: React.FC<LayoutProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Layout className={`menu-window ${className}`} {...props}>
      <Sider className="menu-window__sider">
        <MenuListContainer />
      </Sider>
      <Content className="menu-window__content">{children}</Content>
    </Layout>
  )
}
