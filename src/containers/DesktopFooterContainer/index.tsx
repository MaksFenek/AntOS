import React, {useMemo} from 'react'

import {DesktopFooter, Menu} from 'src/components'
import {useAppSelector} from 'src/redux/hooks'
import {App} from 'src/redux/types'
import {AppBarContainer} from '../AppBarContainer'

export const DesktopFooterContainer: React.FC = () => {
  const state = useAppSelector(store => store.apps.allApps)

  const apps = useMemo(() => {
    const all: App[] = []
    for (const key in state) {
      const app = state[key]
      if (app && app.isOpen) {
        all.push(app)
      }
    }
    return all
  }, [state])

  return (
    <DesktopFooter menu={<Menu />} appBar={<AppBarContainer apps={apps} />} />
  )
}
