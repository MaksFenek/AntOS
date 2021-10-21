import React, {memo, useCallback, useMemo} from 'react'
import {AppBar} from 'src/components'
import {useAppDispatch, useAppSelector} from 'src/redux/hooks'
import {toggleApp} from 'src/redux/slices/apps'
import {App} from 'src/redux/types'

export const AppBarContainer: React.FC = memo(() => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(store => store.apps.allApps)

  const apps = useMemo(() => {
    const all: App[] = []
    for (const key in state) {
      const app = state[key]
      if (app) {
        all.push(app)
      }
    }
    return all
  }, [state])

  const onAppClick = useCallback(
    name => {
      dispatch(toggleApp(name))
    },
    [dispatch],
  )

  return <AppBar apps={apps} onClick={onAppClick} />
})
