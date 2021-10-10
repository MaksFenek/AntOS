import React from 'react'

import {Layout} from 'antd'

import './desktop.scss'
import {DesktopFooter} from 'src/components'

const {Footer, Content} = Layout

export const Desktop: React.FC = ({children}) => {
  return (
    <Layout className="desktop">
      <Content className="desktop-content">{children}</Content>
      <DesktopFooter menu={<div>hello</div>} appBar={<div>appbar</div>} />
    </Layout>
  )
}
