import React from 'react'

import {Desktop} from './DesktopContainer'
import {ResumeApp} from 'src/apps/Resume'
import {SkillsApp} from 'src/apps/Skills'
import {PortfolioApp} from 'src/apps/Portfolio'
import {HelpApp} from 'src/apps/Help'
import {WarningModal} from 'src/components/WarningModal'
import {AccountApp} from 'src/apps/Account'
import {ClockWidget} from 'src/widgets/clock'
import {CursorSupportWrapper} from 'src/components/CursorSupportWrapper'

export const Main: React.FC = () => {
  return (
    <CursorSupportWrapper>
      <Desktop>
        <ClockWidget />
        <AccountApp />
        <HelpApp />
        <PortfolioApp />
        <ResumeApp />
        <SkillsApp />
      </Desktop>
      <WarningModal />
    </CursorSupportWrapper>
  )
}
