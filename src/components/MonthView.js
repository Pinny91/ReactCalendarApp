import React from 'react'
function MonthView(props) {
  const Days = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']
  const Months = [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'December',
  ]
  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate()
  }
  const generateMonthViewArray = (month, year) => {
    let firstDay = new Date(year, month, 1).getDay()
    if (firstDay === 0) firstDay = 7 // Sunday is 0 in js
    const dayPreMonth = daysInMonth(month - 1, year)
    const daysThisMonth = daysInMonth(month, year)
    const lastDay = new Date(year, month, daysThisMonth).getDay()
    const firstDayToRender = dayPreMonth - firstDay + 1
    const array = []

    // Premonth numbers
    for (let index = 1; index < firstDay; index++) {
      array.push(firstDayToRender + index)
    }
    // Actual month
    for (let index = 1; index <= daysThisMonth; index++) {
      array.push(index)
    }
    // Next month
    for (let index = 1; index <= 7 - lastDay; index++) {
      array.push(index)
    }
    return array
  }
  const monthArray = generateMonthViewArray(props.month, props.year)
  return (
    <div className="month-view">
      <div className="year">
        <a
          onClick={() => {
            props.setYear(props.year - 1)
          }}
        >
          {' '}
          &#8249;{' '}
        </a>
        <span> {props.year} </span>
        <a
          onClick={() => {
            props.setYear(props.year + 1)
          }}
        >
          {' '}
          &#8250;{' '}
        </a>
      </div>
      <div className="month">
        <a
          onClick={() => {
            let newMonth = props.month - 1
            if (newMonth < 0) {
              newMonth = 11
              props.setYear(props.year - 1)
            }
            props.setMonth(newMonth)
          }}
        >
          {' '}
          &#8249;{' '}
        </a>
        <span> {Months[props.month]} </span>
        <a
          onClick={() => {
            let newMonth = props.month + 1
            if (newMonth >= 12) {
              newMonth = 0
              props.setYear(props.year + 1)
            }
            props.setMonth(newMonth)
          }}
        >
          {' '}
          &#8250;{' '}
        </a>
      </div>
      <div className="days">
        {Days.map((day) => {
          return <div key={day}> {day} </div>
        })}
      </div>
      <div className="dates">
        {monthArray.map((date, index) => {
          return (
            <div
              key={index}
              className={
                props.year === new Date().getFullYear() &&
                props.month === new Date().getMonth() &&
                date === new Date().getDate()
                  ? 'today'
                  : ''
              }
            >
              {date}
            </div>
          )
        })}
        <div> </div>
      </div>
    </div>
  )
}

export default MonthView
