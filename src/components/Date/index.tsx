import {useCallback, useEffect, useState} from 'react'
import {DatePicker, TimePicker} from 'antd'
import moment from 'moment'
import {useCursor} from 'src/hooks'

export const Date = () => {
  const [className, onMouseEnter, onMouseMove, onMouseLeave] = useCursor()
  const cursor = {className, onMouseEnter, onMouseMove, onMouseLeave}
  const [time, setTime] = useState<moment.Moment>()
  const [date, setDate] = useState<moment.Moment>()

  useEffect(() => {
    setTime(moment())
    setDate(moment())
    const interval = setInterval(() => {
      setTime(moment())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const onDateChange = useCallback(date => {
    setDate(date)
  }, [])
  return (
    <>
      <TimePicker
        {...cursor}
        bordered={false}
        allowClear={false}
        value={time}
      />
      <DatePicker
        {...cursor}
        onChange={onDateChange}
        bordered={false}
        allowClear={false}
        value={date}
      />
    </>
  )
}
