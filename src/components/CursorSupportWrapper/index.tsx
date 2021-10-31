import React, {createContext, useRef} from 'react'

import './cursorSupportWrapper.scss'

export const CursorContext =
  createContext<React.RefObject<HTMLDivElement> | null>(null)

export const CursorSupportWrapper: React.FC = ({children}) => {
  const cursor = useRef<HTMLDivElement>(null)

  const onMouseDown = () => {
    cursor.current?.style.setProperty('--scale', '0.9')
  }

  const onMouseUp = () => {
    cursor.current?.style.setProperty('--scale', '1')
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!document.body.classList.contains('is-cursor-locked')) {
      cursor.current?.style.setProperty('--top', e.pageY + 'px')
      cursor.current?.style.setProperty('--left', e.pageX + 'px')
    }
  }

  return (
    <CursorContext.Provider value={cursor}>
      <main
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className="main">
        {children}
      </main>
      <div ref={cursor} className="cursor">
        <div className="cursor__content"></div>
      </div>
    </CursorContext.Provider>
  )
}
