import React, {memo} from 'react'
import {Layout, Button, Space} from 'antd'
import {Resizable} from 're-resizable'
import Draggable from 'react-draggable'
import {CloseOutlined, LineOutlined} from '@ant-design/icons'

import './app-window.scss'

const {Header, Content} = Layout

interface IAppWindow {
  onClose?: () => void
  onHide?: () => void
  style?: React.CSSProperties
}

export const AppWindow: React.FC<IAppWindow> = memo(
  ({children, style, onClose, onHide}) => {
    return (
      <div style={style}>
        <Draggable
          handle=".handle"
          cancel=".non-draggable"
          bounds=".desktop"
          defaultClassName="app-window"
          defaultPosition={{
            x: 100,
            y: 100,
          }}>
          <Resizable
            minWidth="300"
            minHeight="300"
            defaultSize={{
              height: 400,
              width: 500,
            }}>
            <Layout className="app-window__layout" style={style}>
              <Header className="handle app-window__header">
                <Space align="center">
                  <Button
                    className="non-draggable"
                    onClick={onClose}
                    size="small"
                    type="primary"
                    icon={<CloseOutlined />}
                  />
                  <Button
                    className="non-draggable"
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
      </div>
    )
  },
)
