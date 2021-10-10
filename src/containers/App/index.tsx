import React, {useCallback, useState} from 'react'

import {AppIcon, AppWindow} from 'src/components'

interface IApp {
  icon: React.ReactNode
  window: React.ReactNode | string
}

export const App: React.FC<IApp> = ({icon, window}) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false)

  const onClickAppIcon = useCallback(() => {
    setIsWindowOpen(true)
  }, [])

  const onCloseAppWindow = useCallback(() => {
    setIsWindowOpen(false)
  }, [])

  return (
    <>
      <AppIcon onClick={onClickAppIcon}>{icon}</AppIcon>
      {isWindowOpen && (
        <AppWindow onClose={onCloseAppWindow}>{window}</AppWindow>
      )}
    </>
  )
}
