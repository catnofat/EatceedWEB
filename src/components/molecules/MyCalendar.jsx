import './MyCalendar.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import moment from 'moment';
import { StyledDot } from '../atoms/StyleDot';


const MyCalendar = () => {

    const CalendarContainer = styled.div`
    overflow-y: scroll;
    width: 300px;
    margin: 0 auto;
    padding: 10px;
    flex: 1;
    border-left: 0.2rem solid #ebebeb;
`

    const [date, setDate] = useState(new Date());

    const dayList = [
            '2024-05-27',
            '2024-05-28',
            '2024-05-29',
            '2024-05-31',
            '2024-06-10',
            '2024-06-11',
    ];

    return(
        <CalendarContainer>
            <p id='Year'> 2024 </p>
            <p id='Text'>눌러서 이달의 목표를 적어보세요</p>
            <Calendar
                onChange={setDate}
                value={date}
                locale="en-US"
                next2Label={null}
                nextLabel={null}
                prev2Label={null}
                prevLabel={null}
                minDetail="year"
                onClickDay={()=>{}}
                tileContent={({ date, view }) => {
                    let html = [];
                    if (
                      dayList.find((x) => x === moment(date).format("YYYY-MM-DD"))
                    ) {
                      html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
                    }
                    return <>{html}</>;
                  }}
                formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                showNeighboringMonth={false}
            />
        </CalendarContainer>
    )
}

export default MyCalendar