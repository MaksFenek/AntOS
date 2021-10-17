import React from 'react'

import {Desktop} from './DesktopContainer'
import {ResumeApp} from 'src/apps/Resume'
import {SkillsApp} from 'src/apps/Skills'
import {PortfolioApp} from 'src/apps/Portfolio'

export const Main: React.FC = () => {
  return (
    <section>
      <Desktop>
        <PortfolioApp />
        <ResumeApp />
        <SkillsApp />
      </Desktop>
    </section>
  )
}
