import React, {memo} from 'react'
import {Layout, Button, Space, LayoutProps} from 'antd'
import {Resizable} from 're-resizable'
import Draggable from 'react-draggable'
import {CloseOutlined, LineOutlined} from '@ant-design/icons'

import './app-window.scss'

const {Header, Content} = Layout

interface IAppWindow extends LayoutProps {
  onClose?: () => void
  onHide?: () => void
  style?: React.CSSProperties
}

export const AppWindow: React.FC<IAppWindow> = memo(
  ({children, style, onClose, onHide, className, ...props}) => {
    return (
      <div style={style}>
        <Draggable
          handle=".handle"
          cancel=".non-draggable"
          bounds=".desktop"
          defaultClassName="app-window"
          defaultPosition={{
            x: window.innerWidth / 2 - 300,
            y: window.innerHeight / 2 - 200,
          }}>
          <Resizable
            minWidth="300"
            minHeight="300"
            defaultSize={{
              height: 400,
              width: 500,
            }}>
            <Layout
              className={`app-window__layout ${className}`}
              style={style}
              {...props}>
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
