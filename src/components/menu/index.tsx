import React, {useCallback, useState} from 'react'
import {Button} from 'antd'
import {HomeTwoTone} from '@ant-design/icons'

import {MenuWindow} from './Menu-window'

import './menu.scss'

export const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onClickMenuButton = useCallback(() => {
    setIsMenuOpen(value => !value)
  }, [])

  return (
    <>
      <Button
        onClick={onClickMenuButton}
        className="menu-button"
        size="middle"
        type="text">
        <HomeTwoTone style={{fontSize: '30px'}} />
      </Button>
      {isMenuOpen && <MenuWindow />}
    </>
  )
}
