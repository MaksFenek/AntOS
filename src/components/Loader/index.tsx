import React, {Suspense} from 'react'
import {Spin} from 'antd'

import './loader.scss'

export const Loader: React.FC = ({children}) => {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <Spin size="large" />
        </div>
      }>
      {children}
    </Suspense>
  )
}
