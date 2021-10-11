import React from 'react'

import {Desktop} from './DesktopContainer'
import {ResumeApp} from 'src/apps/Resume'
import {SkillsApp} from 'src/apps/Skills'

export const Main: React.FC = () => {
  return (
    <section>
      <Desktop>
        <ResumeApp />
        <SkillsApp />
      </Desktop>
    </section>
  )
}
