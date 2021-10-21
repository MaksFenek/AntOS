import React from 'react'
import {App} from 'src/containers/App'
import {BookTwoTone} from '@ant-design/icons'

const ResumeAppContent = React.lazy(() => import('./content'))

export const ResumeApp: React.FC = () => {
  return (
    <App
      name="Resume"
      icon={<BookTwoTone style={{fontSize: '30px'}} />}
      window={<ResumeAppContent />}
      defaultPosition={{x: 10, y: 80}}
    />
  )
}
