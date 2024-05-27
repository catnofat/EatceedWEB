import './MyCalendar.css'
import React, { Fragment, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {

    const CalendarContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    border: 2px solid;
    margin-left: 300px;
    border-radius: 10px;
`

    const [date, setDate] = useState(new Date());

    return(
        <CalendarContainer>
            <p id='Year'> 2024 </p>
            <p id='Text'>눌러서 이달의 목표를 적어보세요</p>
            <Calendar
                onChange={setDate}
                value={date}
                locale="en-US"
                formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                showNeighboringMonth={false}
            />
        </CalendarContainer>
    )
}

export default MyCalendar