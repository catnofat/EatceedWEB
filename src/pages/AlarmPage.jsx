import { Fragment } from 'react'
import SNB from '../components/molecules/SNB'
import AlarmGroup from '../components/molecules/AlarmGroup'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  display: flex;
  overflow-x: hidden;
`

const AlarmPage = () => {
  return (
    <Fragment>
      <LayoutContainer>
        <SNB cur="alarm" />
        <AlarmGroup />
      </LayoutContainer>
    </Fragment>
  )
}

export default AlarmPage
