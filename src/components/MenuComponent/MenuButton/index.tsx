import {Button, ButtonProps} from 'antd'
import React from 'react'
import {HomeTwoTone} from '@ant-design/icons'
import {useCursor} from 'src/hooks'

import './menuButton.scss'

export const MenuButton: React.FC<ButtonProps> = props => {
  const [className, onMouseEnter, onMouseMove, onMouseLeave] = useCursor()
  return (
    <Button
      className={'menu-button ' + className}
      size="middle"
      type="text"
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}>
      <HomeTwoTone style={{fontSize: '30px'}} />
    </Button>
  )
}
