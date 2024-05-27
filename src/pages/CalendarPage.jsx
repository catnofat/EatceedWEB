import { Fragment } from 'react'
import FNB from '../components/molecules/FNB'
import MyCalendar from '../components/molecules/MyCalendar';

const CalendarPage = () => {

  

  return (
    <Fragment>
      <FNB cur="calendar" />
      <MyCalendar></MyCalendar>
    </Fragment>
  )
}

export default CalendarPage
