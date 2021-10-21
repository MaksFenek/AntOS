import React from 'react'

import {App} from 'src/containers/App'
import {FilePptTwoTone} from '@ant-design/icons'

const PortfolioAppContent = React.lazy(() => import('./content'))

export const PortfolioApp: React.FC = () => {
  return (
    <App
      name="Portfolio"
      icon={<FilePptTwoTone style={{fontSize: '30px'}} />}
      window={<PortfolioAppContent />}
      defaultPosition={{x: 10, y: 0}}
    />
  )
}
