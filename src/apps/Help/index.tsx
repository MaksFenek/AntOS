import React from 'react'
import {App} from 'src/containers/App'
import {QuestionCircleTwoTone} from '@ant-design/icons'
import {HelpAppContent} from './content'

export const HelpApp: React.FC = () => {
  return (
    <App
      name="Help"
      icon={<QuestionCircleTwoTone style={{fontSize: '30px'}} />}
      window={<HelpAppContent />}
      defaultPosition={{x: 10, y: 300}}
    />
  )
}
