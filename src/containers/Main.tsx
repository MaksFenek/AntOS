import React from 'react'

import {Desktop} from './DesktopContainer'
import {ResumeApp} from 'src/apps/Resume'
import {SkillsApp} from 'src/apps/Skills'
import {PortfolioApp} from 'src/apps/Portfolio'
import {HelpApp} from 'src/apps/Help'

export const Main: React.FC = () => {
  return (
    <section>
      <Desktop>
        <HelpApp />
        <PortfolioApp />
        <ResumeApp />
        <SkillsApp />
      </Desktop>
    </section>
  )
}
