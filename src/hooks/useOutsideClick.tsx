import React, {useEffect, useRef} from 'react'

export const useOutsideClick = (
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Document)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [setIsMenuOpen])

  const Wrapper: React.FC = ({children}) => (
    <div
      className="outside-click-wrapper"
      style={{display: 'inline-flex', flexDirection: 'column'}}
      ref={ref}>
      {children}
    </div>
  )

  return Wrapper
}
