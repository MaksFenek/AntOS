import React, {memo, useCallback, useEffect} from 'react'
import {ControlPosition} from 'react-draggable'

import {
  AppIcon,
  AppWindow,
  AppWindowErrorBoundary,
  Loader,
} from 'src/components'
import {useAnimation} from 'src/hooks'
import {useAppDispatch, useAppSelector} from 'src/redux/hooks'
import {addApp, closeApp, openApp, toggleApp} from 'src/redux/slices/apps'

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

    const setIsOpen = (value: boolean) => {
      if (value) {
        dispatch(openApp(name))
      } else {
        dispatch(closeApp(name))
      }
    }

    const [AnimatedAppWindow, onClickToggleButton] = useAnimation({
      isOpen: state?.isOpen,
      setIsOpen: setIsOpen,
      startClassName: 'app-window-opening',
      animationDuration: 300,
      Component: AppWindow,
    })

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

    const onClickAppIcon = useCallback(() => {
      if (!state?.isOpen) {
        onClickToggleButton()
      }
      dispatch(openApp(name))
    }, [dispatch, name, state?.isOpen, onClickToggleButton])

    const onHideAppWindow = useCallback(() => {
      dispatch(toggleApp(name))
    }, [dispatch, name])

    return (
      <>
        <AppIcon
          name={state?.name}
          defaultPosition={defaultPosition}
          onDoubleClick={onClickAppIcon}>
          {icon}
        </AppIcon>
        <AnimatedAppWindow
          style={{
            display: state?.hidden ? 'none' : undefined,
            visibility: !state?.isOpen ? 'hidden' : undefined,
          }}
          onClose={onClickToggleButton}
          onHide={onHideAppWindow}>
          <AppWindowErrorBoundary>
            <Loader>{window}</Loader>
          </AppWindowErrorBoundary>
        </AnimatedAppWindow>
      </>
    )
  },
)
