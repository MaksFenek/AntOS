import {useCallback, useEffect, useState} from 'react'
import {DatePicker, TimePicker} from 'antd'
import moment from 'moment'

export const Date = () => {
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
      <TimePicker bordered={false} allowClear={false} value={time} />
      <DatePicker
        onChange={onDateChange}
        bordered={false}
        allowClear={false}
        value={date}
      />
    </>
  )
}
