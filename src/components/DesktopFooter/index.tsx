import React from 'react'
import {Layout, Space, Divider} from 'antd'

import {Menu} from '../index'
import {AppBarContainer} from 'src/containers/AppBarContainer'
import {Date} from '../Date'

import './desktop-footer.scss'

const {Footer} = Layout

export const DesktopFooter: React.FC = () => {
  return (
    <Footer className="desktop-footer">
      <Menu />
      <Divider type="vertical" style={{height: 'auto'}} />
      <Space align="start" className="desktop-footer__bar">
        <Space>
          <AppBarContainer />
        </Space>
        <Space>
          <Date />
        </Space>
      </Space>
    </Footer>
  )
}
