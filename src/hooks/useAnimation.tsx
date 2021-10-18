import React, {useState} from 'react'

interface useAnimationTypes {
  startClassName: string
  animationDuration: number
  isOpen?: boolean
  setIsOpen: (value: boolean) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.FC<any>
}

export function useAnimation({
  startClassName,
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
    if (!isOpen) {
      setIsOpen(true)
    }
  }
  const handleAnimationEnd = () => {
    if (isOpen && closing) {
      setIsOpen(false)
    }
  }

  const Animate: React.FC<React.ComponentProps<typeof Component>> = ({
    children,
    className,
    onAnimationEnd,
    style = {},
    ...props
  }) => (
    <Component
      className={`${className} ${startClassName}`}
      onAnimationEnd={() => {
        if (onAnimationEnd) {
          onAnimationEnd()
        }
        handleAnimationEnd()
      }}
      style={Object.assign(style, {
        animationDirection: closing ? 'alternate-reverse' : 'alternate',
        animationDuration: animationDuration + 'ms',
      })}
      {...props}>
      {children}
    </Component>
  )
  return [Animate, onClick]
}
