import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import commonReducer from './slices/common'
import appsReducer from './slices/apps'
import {rootSaga} from './sagas/root'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    common: commonReducer,
    apps: appsReducer,
  },
  devTools: true,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
