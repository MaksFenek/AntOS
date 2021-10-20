import React, {useState} from 'react'
import {Button} from 'antd'
import {HomeTwoTone} from '@ant-design/icons'

import {useOutsideClick} from 'src/hooks'
import {MenuWindow} from './MenuWindow'

import './menu.scss'

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [closing, setClosing] = useState(true)

  const onOutsideClick = () => {
    if (!closing) {
      setClosing(true)
    }
  }

  const onClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
    setClosing(val => !val)
  }

  const Wrapper = useOutsideClick(onOutsideClick)

  return (
    <Wrapper>
      <Button
        onClick={onClick}
        className="menu-button"
        size="middle"
        type="text">
        <HomeTwoTone style={{fontSize: '30px'}} />
      </Button>
      {isOpen && <MenuWindow closing={closing} />}
    </Wrapper>
  )
}
