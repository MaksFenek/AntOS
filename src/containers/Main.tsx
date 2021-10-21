import React from 'react'

import {Desktop} from './DesktopContainer'
import {ResumeApp} from 'src/apps/Resume'
import {SkillsApp} from 'src/apps/Skills'
import {PortfolioApp} from 'src/apps/Portfolio'
import {HelpApp} from 'src/apps/Help'
import {WarningModal} from 'src/components/WarningModal'

export const Main: React.FC = () => {
  return (
    <section>
      <Desktop>
        <HelpApp />
        <PortfolioApp />
        <ResumeApp />
        <SkillsApp />
      </Desktop>
      <WarningModal />
    </section>
  )
}
