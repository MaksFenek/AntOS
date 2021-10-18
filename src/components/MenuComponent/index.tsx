import React, {useState} from 'react'
import {Button} from 'antd'
import {HomeTwoTone} from '@ant-design/icons'

import {useAnimation, useOutsideClick} from 'src/hooks'
import {MenuWindow} from './MenuWindow'

import './menu.scss'

export const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [AnimatedMenuWindow, onClickMenuButton] = useAnimation({
    isOpen: isMenuOpen,
    setIsOpen: setIsMenuOpen,
    startClassName: 'menu-opening',
    endClassName: 'menu-closing',
    animationDuration: 400,
    Component: MenuWindow,
  })

  const onOutsideClick = () => {
    if (isMenuOpen) {
      onClickMenuButton()
    }
  }

  const Wrapper = useOutsideClick(onOutsideClick)

  return (
    <Wrapper>
      <Button
        onClick={onClickMenuButton}
        className="menu-button"
        size="middle"
        type="text">
        <HomeTwoTone style={{fontSize: '30px'}} />
      </Button>
      {isMenuOpen && <AnimatedMenuWindow />}
    </Wrapper>
  )
}
