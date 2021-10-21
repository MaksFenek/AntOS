import React from 'react'
import {Widget} from 'src/components/Widget'
import ClockWidgetContent from './content'

export const ClockWidget: React.FC = () => {
  return (
    <Widget
      defaultPosition={{
        x: window.innerWidth - 300,
        y: window.innerHeight / 2 - 300,
      }}
      style={{background: 'none', border: 'none', overflow: 'unset'}}>
      <ClockWidgetContent />
    </Widget>
  )
}
