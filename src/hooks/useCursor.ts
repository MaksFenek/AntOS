import {useCallback, useContext, useMemo} from 'react'
import {CursorContext} from 'src/components/CursorSupportWrapper'

export const useCursor = (): [
  string,
  (e: React.MouseEvent<HTMLElement>) => void,
  (e: React.MouseEvent<HTMLElement>) => void,
  (e: React.MouseEvent<HTMLElement>) => void,
] => {
  const cursor = useContext(CursorContext)

  const onMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      document.body.classList.add('is-cursor-locked')
      const rect = e.currentTarget.getBoundingClientRect()

      cursor?.current?.classList.add('is-locked')
      if (rect) {
        cursor?.current?.style.setProperty(
          '--top',
          rect.top + rect.height / 2 + 'px',
        )
        cursor?.current?.style.setProperty(
          '--left',
          rect.left + rect.width / 2 + 'px',
        )
        cursor?.current?.style.setProperty('--width', rect.width + 'px')
        cursor?.current?.style.setProperty('--height', rect.height + 'px')
      }

      e.currentTarget.style.setProperty('--scale', '1.05')
    },
    [cursor],
  )

  const onMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      cursor?.current?.style.setProperty('--width', '18px')
      cursor?.current?.style.setProperty('--height', '18px')
      cursor?.current?.style.setProperty('--translateX', '0')
      cursor?.current?.style.setProperty('--translateY', '0')

      e.currentTarget.style.setProperty('--translateX', '0')
      e.currentTarget.style.setProperty('--translateY', '0')
      e.currentTarget.style.setProperty('--scale', '1')

      if (document.body.classList.contains('is-cursor-locked')) {
        document.body.classList.remove('is-cursor-locked')
        cursor?.current?.classList.remove('is-locked')
      }
    },
    [cursor],
  )

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      if (rect) {
        const halfHeight = rect.height / 2
        const topOffset = (e.pageY - rect.top - halfHeight) / halfHeight
        const halfWidth = rect.width / 2
        const leftOffset = (e.pageX - rect.left - halfWidth) / halfWidth

        cursor?.current?.style.setProperty(
          '--translateX',
          `${leftOffset * 3}px`,
        )
        cursor?.current?.style.setProperty('--translateY', `${topOffset * 3}px`)

        e.currentTarget.style.setProperty('--translateX', `${leftOffset * 6}px`)
        e.currentTarget.style.setProperty('--translateY', `${topOffset * 4}px`)
      }
    },
    [cursor],
  )

  const result: [
    string,
    (e: React.MouseEvent<HTMLElement>) => void,
    (e: React.MouseEvent<HTMLElement>) => void,
    (e: React.MouseEvent<HTMLElement>) => void,
  ] = useMemo(
    () => ['cursor-wrapper', onMouseEnter, onMouseMove, onMouseLeave],
    [onMouseEnter, onMouseMove, onMouseLeave],
  )

  return result
}
