import React, {memo, useCallback} from 'react'
import {AppBar} from 'src/components'
import {useAppDispatch} from 'src/redux/hooks'
import {toggleApp} from 'src/redux/slices/apps'
import {App} from 'src/redux/types'

interface IAppBarContainer {
  apps: App[]
}

export const AppBarContainer: React.FC<IAppBarContainer> = memo(({apps}) => {
  const dispatch = useAppDispatch()

  const onAppClick = useCallback(
    name => {
      dispatch(toggleApp(name))
    },
    [dispatch],
  )

  return <AppBar apps={apps} onClick={onAppClick} />
})
