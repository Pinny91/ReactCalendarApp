import React, { useState } from 'react'
import MonthView from './MonthView'

function Calendar() {
  const today = new Date()
  // The calendar view
  // views: year, month, week
  const [view, setView] = useState('month')
  // The calendar date data
  const [activeYear, setActiveYear] = useState(today.getFullYear())
  const [activeMonth, setActiveMonth] = useState(today.getMonth())
  const [activeDate, setActiveDate] = useState(today.getDate())
  const [activeDay, setActiveDay] = useState(today.getDay())
  return (
    <div>
      <MonthView
        year={activeYear}
        month={activeMonth}
        date={activeDate}
        day={activeDay}
        setYear={setActiveYear}
        setMonth={setActiveMonth}
      />
    </div>
  )
}

export default Calendar
