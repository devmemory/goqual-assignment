import React, { KeyboardEvent, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { commonUtil } from 'src/utils/commonUtil'

interface Props {
  value?: string
  onChange: (value: string) => void
}

/**
 * @param onChange fires only when enter is pressed or leave
 */
const CDatePicker = ({ value, onChange }: Props) => {
  const [dateString, setDateString] = useState<string | undefined>(value)

  const onChangeDate = (date: Date | null) => {
    if (date !== null) {
      setDateString(commonUtil.convertToDateString(date))
    }
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && dateString) {
      onChange(dateString)
    }
  }

  return (
    <DatePicker
      className="text-center"
      onKeyDown={onKeyDown}
      selected={dateString === undefined ? new Date() : new Date(dateString)}
      onChange={onChangeDate}
      showTimeSelect
      timeFormat="HH:mm:ss"
      dateFormat="yyyy-MM-dd HH:mm:ss"
      open={false}
    />
  )
}

export default CDatePicker
