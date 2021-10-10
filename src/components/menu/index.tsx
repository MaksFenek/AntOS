import {Button} from 'antd'
import {HomeTwoTone} from '@ant-design/icons'
import React, {useCallback, useState} from 'react'

import './menu.scss'
import {MenuWindow} from './menu-window'

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
