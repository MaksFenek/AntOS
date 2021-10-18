import React, {HTMLAttributes, useState} from 'react'

interface useAnimationTypes {
  startClassName: string
  endClassName: string
  animationDuration: number
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  Component: React.FC<HTMLAttributes<HTMLElement>>
}

export function useAnimation({
  startClassName,
  endClassName,
  animationDuration,
  isOpen,
  setIsOpen,
  Component,
}: useAnimationTypes): [
  React.FC<React.ComponentProps<typeof Component>>,
  () => void,
] {
  const [closing, setClosing] = useState(true)

  const onClick = () => {
    setClosing(value => !value)
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false)
      }, animationDuration)
    } else setIsOpen(true)
  }

  const Animate: React.FC<React.ComponentProps<typeof Component>> = ({
    children,
    ...props
  }) => (
    <Component
      className={`${startClassName} ${closing ? endClassName : ''}`}
      // "+ 20" need for fixing broken framerate
      style={{animationDuration: animationDuration + 20 + 'ms'}}
      {...props}>
      {children}
    </Component>
  )
  return [Animate, onClick]
}
