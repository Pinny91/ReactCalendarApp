import React from 'react'
function MonthView(props) {
    function daysInMonth (month, year) { 
        return new Date(year, month+1, 0).getDate(); 
    } 
    const Days = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']
    const Months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December']
    const generateMonthViewArray = (month, year) => {
        const firstDay = new Date(year, month, 1).getDay()
        const dayPreMonth = daysInMonth(month-1, year)
        const daysThisMonth = daysInMonth(month, year)
        console.log(daysThisMonth, month)
        console.log(dayPreMonth, month-1)
        const lastDay = new Date(year, month, daysThisMonth).getDay()
        console.log(firstDay, lastDay)

        const firstDayToRender = dayPreMonth - firstDay + 1
        console.log(firstDayToRender)
        const array = []
        for (let index = 1; index < firstDay; index++) {
            array.push(firstDayToRender + index)
        }
        for (let index = 1; index <= daysThisMonth; index++) {
            array.push(index)
        }
        for (let index = 1; index <= 7 - lastDay; index++) {
            array.push(index)
        }

        console.log(array)
        return array
    }
    const monthArray = generateMonthViewArray(props.month, props.year)
    return (
        <div className='month-view'>
            <div className='year'> {props.year} </div>
            <div className='month'> {Months[props.month]} </div>
            <div className='days'> 
                {
                    Days.map(day => {
                        return ( <div key={day}> {day} </div> )
                    })
                }
            </div>
            <div className='dates'> 
                {
                    monthArray.map((date, index) => {
                        return ( 
                            <div key={index}
                                className={
                                    (props.year === (new Date().getFullYear()) &&
                                    props.month === (new Date().getMonth()) &&
                                    date === (new Date().getDate()) ) ? 'today' : ''
                                }
                            > 
                                {date} 
                            </div> )
                    })
                }
                <div> </div>
            </div>

        </div>
    )
}

export default MonthView