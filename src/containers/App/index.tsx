import React, {memo, useCallback, useEffect, useState} from 'react'
import {ControlPosition} from 'react-draggable'

import {
  AppIcon,
  AppWindow,
  AppWindowErrorBoundary,
  Loader,
} from 'src/components'
import {useAppDispatch, useAppSelector} from 'src/redux/hooks'
import {addApp, closeApp, openApp, toggleApp} from 'src/redux/slices/apps'
import {delay} from 'src/utils/delay'

import './app.scss'

interface IApp {
  name: string
  icon: React.ReactNode
  window: React.ReactNode | string
  defaultPosition: ControlPosition
}

export const App: React.FC<IApp> = memo(
  ({name, icon, window, defaultPosition}) => {
    const state = useAppSelector(store => store.apps.allApps?.[name])
    const dispatch = useAppDispatch()

    const [opened, setOpened] = useState(false)

    useEffect(() => {
      dispatch(
        addApp({
          name,
          icon,
          defaultPosition,
          position: defaultPosition,
          isOpen: false,
          hidden: false,
        }),
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const removeAppFromScreen = () => {
      setOpened(false)
    }

    const onClickAppIcon = useCallback(() => {
      setOpened(true)
      dispatch(openApp(name))
    }, [dispatch, name])

    const onHideAppWindow = useCallback(() => {
      dispatch(toggleApp(name))
    }, [dispatch, name])

    const onCloseAppWindow = useCallback(() => {
      dispatch(closeApp(name))
      delay(500, removeAppFromScreen)
    }, [dispatch, name])

    return (
      <>
        <AppIcon
          name={state?.name}
          defaultPosition={defaultPosition}
          onDoubleClick={onClickAppIcon}>
          {icon}
        </AppIcon>
        {opened && (
          <AppWindow
            isOpen={state?.isOpen}
            hidden={state?.hidden}
            onClose={onCloseAppWindow}
            onHide={onHideAppWindow}>
            <AppWindowErrorBoundary>
              <Loader>{window}</Loader>
            </AppWindowErrorBoundary>
          </AppWindow>
        )}
      </>
    )
  },
)
