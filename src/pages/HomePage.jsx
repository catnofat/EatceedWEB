import { Fragment } from 'react'
import SNB from '../components/molecules/SNB'
import styled from 'styled-components'
import MainLeftTemplate from '../components/templates/MainLeftTemplate'
import MainRightTemplate from '../components/templates/MainRightTemplate'

const LayoutContainer = styled.div`
  display: flex;
  overflow-x: hidden;
`
const ContentDiv = styled.div`
  flex-grow: 1;
  display: flex;
`

const HomePage = () => {
  return (
    <Fragment>
      <LayoutContainer>
        <SNB cur="home" />
        <ContentDiv>
          <MainLeftTemplate />
          <MainRightTemplate />
        </ContentDiv>
      </LayoutContainer>
    </Fragment>
  )
}

export default HomePage
