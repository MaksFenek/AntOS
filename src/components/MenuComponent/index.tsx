import React, {useCallback, useState} from 'react'
import {Button} from 'antd'
import {HomeTwoTone} from '@ant-design/icons'

import {useOutsideClick} from 'src/hooks'
import {MenuWindow} from './MenuWindow'

import './menu.scss'

export const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const Wrapper = useOutsideClick(setIsMenuOpen)

  const onClickMenuButton = useCallback(() => {
    setIsMenuOpen(value => !value)
  }, [])

  return (
    <Wrapper>
      <Button
        onClick={onClickMenuButton}
        className="menu-button"
        size="middle"
        type="text">
        <HomeTwoTone style={{fontSize: '30px'}} />
      </Button>
      {isMenuOpen && <MenuWindow />}
    </Wrapper>
  )
}
