import React from 'react'

import {Layout} from 'antd'

import './desktop.scss'

const {Footer, Content} = Layout

export const Desktop: React.FC = ({children}) => {
  return (
    <Layout className="desktop">
      <Content className="desktop-content">{children}</Content>
      <Footer className="desktop-footer"></Footer>
    </Layout>
  )
}
