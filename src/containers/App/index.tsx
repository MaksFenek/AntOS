import React, {memo, useCallback, useEffect} from 'react'
import {ControlPosition} from 'react-draggable'

import {
  AppIcon,
  AppWindow,
  AppWindowErrorBoundary,
  Loader,
} from 'src/components'
import {useAppDispatch, useAppSelector} from 'src/redux/hooks'
import {addApp, closeApp, openApp, toggleApp} from 'src/redux/slices/apps'

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
      dispatch(openApp(name))
    }, [dispatch, name])

    const onCloseAppWindow = useCallback(() => {
      dispatch(closeApp(name))
    }, [dispatch, name])

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
        {state?.isOpen && (
          <AppWindow
            style={{display: state.hidden ? 'none' : undefined}}
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
