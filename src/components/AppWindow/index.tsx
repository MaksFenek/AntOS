import React, {memo} from 'react'
import {Layout, Button, Space, LayoutProps} from 'antd'
import {Resizable} from 're-resizable'
import Draggable from 'react-draggable'
import {CloseOutlined, LineOutlined} from '@ant-design/icons'
import {useSpring} from '@react-spring/core'
import {animated, config} from '@react-spring/web'
import {useCursor} from 'src/hooks'

import './app-window.scss'
const {Header, Content} = Layout

interface IAppWindow extends LayoutProps {
  isOpen?: boolean
  hidden?: boolean
  onClose?: () => void
  onHide?: () => void
}

export const AppWindow: React.FC<IAppWindow> = memo(
  ({
    children,
    isOpen = false,
    hidden = false,
    onClose,
    onHide,
    className,
    ...props
  }) => {
    const [cursorClassName, onMouseEnter, onMouseMove, onMouseLeave] =
      useCursor()
    const appearStyles = useSpring({
      from: {
        transform: 'scale(0)',
        opacity: 0,
      },
      to: {
        transform: 'scale(1)',
        opacity: 1,
      },
      config: config.gentle,
      reverse: !isOpen,
    })

    const hiddenStyles = useSpring({
      from: {
        transform: 'translateY(100vh) scale(1.5)',
        opacity: 0.5,
      },
      to: {
        transform: 'translateY(0vh) scale(1)',
        opacity: 1,
      },
      reverse: hidden,
    })
    return (
      <div className="" style={{position: 'relative', zIndex: 3}}>
        <animated.div style={hiddenStyles}>
          <animated.div style={appearStyles}>
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
                  width: 550,
                }}>
                <Layout
                  className={`app-window__layout ${className}`}
                  {...props}>
                  <Header className="handle app-window__header">
                    <Space align="center" size={0}>
                      <div
                        className={cursorClassName}
                        onMouseEnter={onMouseEnter}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}>
                        <Button
                          className="non-draggable"
                          onClick={onClose}
                          size="small"
                          type="primary"
                          icon={<CloseOutlined />}
                        />
                      </div>

                      <div
                        className={cursorClassName}
                        onMouseEnter={onMouseEnter}
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}>
                        <Button
                          className="non-draggable"
                          onClick={onHide}
                          size="small"
                          type="primary"
                          icon={<LineOutlined />}
                        />
                      </div>
                    </Space>
                  </Header>
                  <Content className="app-window__content">{children}</Content>
                </Layout>
              </Resizable>
            </Draggable>
          </animated.div>
        </animated.div>
      </div>
    )
  },
)
