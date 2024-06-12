import {useState, Fragment } from 'react'
import MyCalendar from '../components/molecules/MyCalendar';
import SNB from '../components/molecules/SNB'
import styled from 'styled-components';
import DetailContent from '../components/templates/DetailContent';
import moment from 'moment';

const LayoutContainer = styled.div`
  display: flex;
  overflow-x: hidden;
`

const ContentDiv = styled.div`
  flex-grow: 1;
  display: flex;
`

const CalendarPage = (props) => {

  const [date, setDate] = useState(new Date());

  const onSetDate = (date) => {
    const formattedDate = date instanceof Date ? date.toISOString().split('T')[0] : '';
    setDate(formattedDate);
  }

  return (
    <Fragment>
      <LayoutContainer>
      <SNB cur="calendar" />
      <ContentDiv>
        <MyCalendar date={date} setDate={setDate}></MyCalendar>
        <DetailContent date={date}></DetailContent>
      </ContentDiv>
      </LayoutContainer>
    </Fragment>
  )
}

export default CalendarPage
