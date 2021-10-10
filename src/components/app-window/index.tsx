import React from 'react'
import {Layout, Button, Space} from 'antd'
import {Resizable} from 're-resizable'
import Draggable from 'react-draggable'
import {CloseOutlined, LineOutlined} from '@ant-design/icons'

import './appwindow.scss'

const {Header, Content} = Layout

interface IAppWindow {
  onClose?: () => void
  onHide?: () => void
}

export const AppWindow: React.FC<IAppWindow> = ({
  children,
  onClose,
  onHide,
}) => {
  return (
    <Draggable handle=".handle">
      <Resizable
        minWidth="300"
        minHeight="300"
        defaultSize={{
          height: 400,
          width: 500,
        }}>
        <Layout className="app-window__layout">
          <Header className="handle app-window__header">
            <Space align="center">
              <Button
                onClick={onClose}
                size="small"
                type="primary"
                icon={<CloseOutlined />}
              />
              <Button
                onClick={onHide}
                size="small"
                type="primary"
                icon={<LineOutlined />}
              />
            </Space>
          </Header>
          <Content className="app-window__content">{children}</Content>
        </Layout>
      </Resizable>
    </Draggable>
  )
}
