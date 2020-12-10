import React, { useState } from 'react'
import MonthView from './MonthView'

function Calendar() {
    const getToday = () => {
        return new Date()
    }
    // The calendar view
    // views: year, month, week
    const [view, setView] = useState('month')
    // The calendar date data
    const [activeYear, setActiveYear] = useState(getToday().getFullYear())
    const [activeMonth, setActiveMonth] = useState(getToday().getMonth())
    const [activeDate, setActiveDate] = useState(getToday().getDate())
    const [activeDay, setActiveDay] = useState(getToday().getDay())
    return (
        <div>
            <MonthView 
                year={activeYear} 
                month={activeMonth}
                date={activeDate} 
                day={activeDay}
            />
        </div>
    )
}

export default Calendar