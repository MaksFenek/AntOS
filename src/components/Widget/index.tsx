import React from 'react'
import Draggable from 'react-draggable'

import './widget.scss'

interface IWidget
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  defaultPosition?: {
    x: number
    y: number
  }
}

export const Widget: React.FC<IWidget> = ({
  style,
  defaultPosition,
  children,
}) => {
  return (
    <Draggable
      bounds=".desktop"
      defaultClassName="widget"
      defaultPosition={
        defaultPosition || {
          x: window.innerWidth / 2 - 300,
          y: window.innerHeight / 2 - 200,
        }
      }>
      <section style={style} className="widget-layout">
        {children}
      </section>
    </Draggable>
  )
}
