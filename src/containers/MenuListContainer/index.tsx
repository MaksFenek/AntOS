import React, {useCallback, useMemo} from 'react'
import {MenuList} from 'src/components/Menu/MenuList'
import {useAppDispatch, useAppSelector} from 'src/redux/hooks'
import {openApp} from 'src/redux/slices/apps'

export const MenuListContainer: React.FC = () => {
  const state = useAppSelector(store => store.apps.allApps)
  const dispatch = useAppDispatch()

  const apps = useMemo(() => {
    const result = []
    if (state) {
      for (const key in state) {
        const app = state[key]
        if (app) {
          result.push(app)
        }
      }
    }
    return result
  }, [state])

  const onAppClick = useCallback(
    e => {
      dispatch(openApp(e.key))
    },
    [dispatch],
  )

  return <MenuList apps={apps} onAppClick={onAppClick} />
}
