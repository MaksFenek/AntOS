import {config, Spring} from '@react-spring/core'
import {animated} from '@react-spring/web'
import React, {useRef} from 'react'

import './clock.scss'

const ClockWidgetContent: React.FC = () => {
  const hr = useRef<HTMLDivElement>(null)
  const mn = useRef<HTMLDivElement>(null)
  const sc = useRef<HTMLDivElement>(null)

  setInterval(() => {
    const deg = 6
    const day = new Date()
    const hh = day.getHours() * 30
    const mm = day.getMinutes() * deg
    const ss = day.getSeconds() * deg
    if (hr.current && mn.current && sc.current) {
      hr.current.style.transform = `rotateZ(${hh + mm / 12}deg)`
      mn.current.style.transform = `rotateZ(${mm}deg)`
      sc.current.style.transform = `rotateZ(${ss}deg)`
    }
  }, 100)
  return (
    <Spring
      from={{transform: 'scale(0)', opacity: 0}}
      to={{transform: 'scale(1)', opacity: 1}}
      config={config.gentle}
      delay={300}>
      {styles => (
        <animated.div style={styles} className="clock">
          <div className="hour">
            <div className="hr" ref={hr} />
          </div>
          <div className="min">
            <div className="mn" ref={mn} />
          </div>
          <div className="sec">
            <div className="sc" ref={sc} />
          </div>
        </animated.div>
      )}
    </Spring>
  )
}

export default ClockWidgetContent
