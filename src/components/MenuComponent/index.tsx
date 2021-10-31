import React, {memo, useState} from 'react'

import {useOutsideClick} from 'src/hooks'
import {MenuWindow} from './MenuWindow'
import {MenuButton} from './MenuButton'

export const Menu: React.FC = memo(() => {
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
      <MenuButton onClick={onClick} />
      {isOpen && <MenuWindow closing={closing} />}
    </Wrapper>
  )
})
