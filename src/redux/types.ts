import React from 'react'
import {ControlPosition} from 'react-draggable'

export interface App {
  name: string
  icon: React.ReactNode
  position: ControlPosition
  defaultPosition: ControlPosition
  isOpen: boolean
  hidden: boolean
}
