import React, {useCallback, useState} from 'react'
import {ControlPosition} from 'react-draggable'

import {AppIcon, AppWindow} from 'src/components'

interface IApp {
  icon: React.ReactNode
  window: React.ReactNode | string
  defaultPosition?: ControlPosition
}

export const App: React.FC<IApp> = ({icon, window, defaultPosition}) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false)

  const onClickAppIcon = useCallback(() => {
    setIsWindowOpen(true)
  }, [])

  const onCloseAppWindow = useCallback(() => {
    setIsWindowOpen(false)
  }, [])

  return (
    <>
      <AppIcon defaultPosition={defaultPosition} onDoubleClick={onClickAppIcon}>
        {icon}
      </AppIcon>
      {isWindowOpen && (
        <AppWindow onClose={onCloseAppWindow}>{window}</AppWindow>
      )}
    </>
  )
}
