import React from 'react'
import {App} from 'src/containers/App'
import {CodeTwoTone} from '@ant-design/icons'

import {SkillsAppContent} from './content'

export const SkillsApp: React.FC = () => {
  return (
    <App
      name="Skills"
      icon={<CodeTwoTone style={{fontSize: '30px'}} />}
      window={<SkillsAppContent />}
      defaultPosition={{x: 0, y: 340}}
    />
  )
}
