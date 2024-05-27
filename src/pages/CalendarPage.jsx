import { Fragment } from 'react'
import MyCalendar from '../components/molecules/MyCalendar';
import SNB from '../components/molecules/SNB'


const CalendarPage = () => {

  

  return (
    <Fragment>
      <SNB cur="calendar" />
      <MyCalendar></MyCalendar>

    </Fragment>
  )
}

export default CalendarPage
