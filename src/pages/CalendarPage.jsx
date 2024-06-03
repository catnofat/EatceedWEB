import { Fragment } from 'react'
import MyCalendar from '../components/molecules/MyCalendar';
import SNB from '../components/molecules/SNB'
import styled from 'styled-components';
import DetailContent from '../components/templates/DetailContent';

const LayoutContainer = styled.div`
  display: flex;
  overflow-x: hidden;
`

const ContentDiv = styled.div`
  flex-grow: 1;
  display: flex;
`

const CalendarPage = () => {

  return (
    <Fragment>
      <LayoutContainer>
      <SNB cur="calendar" />
      <ContentDiv>
        <MyCalendar></MyCalendar>
        <DetailContent></DetailContent>
      </ContentDiv>
      </LayoutContainer>
    </Fragment>
  )
}

export default CalendarPage
