import { Fragment } from 'react'
import SNB from '../components/molecules/SNB'
import styled from 'styled-components'
import ReportGroup from '../components/molecules/ReportGroup'

const LayoutContainer = styled.div`
  display: flex;
  overflow-x: hidden;
`

const ReportPage = () => {
  return (
    <Fragment>
      <LayoutContainer>
        <SNB cur="report" />
        <ReportGroup />
      </LayoutContainer>
    </Fragment>
  )
}

export default ReportPage
