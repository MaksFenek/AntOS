import React from 'react'
import {App} from 'src/containers/App'
import {CodeTwoTone} from '@ant-design/icons'

const SkillsAppContent = React.lazy(() => import('./content'))

export const SkillsApp: React.FC = () => {
  return (
    <App
      name="Skills"
      icon={<CodeTwoTone style={{fontSize: '30px'}} />}
      window={<SkillsAppContent />}
      defaultPosition={{x: 10, y: 160}}
    />
  )
}
