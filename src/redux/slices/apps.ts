import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {RootState} from '../store'
import {App} from '../types'

interface AppsState {
  allApps: {
    [key: string]: App | undefined
  }
}

const initialState: AppsState = {
  allApps: {},
}

export const apps = createSlice({
  name: 'apps',
  initialState,
  reducers: {
    addApp: (state, action: PayloadAction<App>) => {
      const app = action.payload
      state.allApps[app.name] = {...app}
    },
    openApp: (state, action: PayloadAction<string>) => {
      const app = state.allApps?.[action.payload]
      if (app) {
        app.isOpen = true
      }
    },
    closeApp: (state, action: PayloadAction<string>) => {
      const app = state.allApps?.[action.payload]
      if (app) {
        app.isOpen = false
      }
    },
    toggleApp: (state, action: PayloadAction<string>) => {
      const app = state.allApps?.[action.payload]
      if (app) {
        app.isOpen = !app.isOpen
      }
    },
  },
})

export const {addApp, openApp, closeApp, toggleApp} = apps.actions

export const selectCount = (state: RootState) => state.common.value

export default apps.reducer
