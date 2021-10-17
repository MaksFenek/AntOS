import React from 'react'
import {App} from 'src/containers/App'
import {FilePptTwoTone} from '@ant-design/icons'
import {PortfolioAppContent} from './content'

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
