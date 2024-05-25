import { Fragment } from 'react'
import SNB from '../components/molecules/SNB'
import styled from 'styled-components'
import MainLeftTemplate from '../components/templates/MainLeftTemplate'

const LayoutContainer = styled.div`
  display: flex;
`
const ContentDiv = styled.div`
  flex-grow: 1;
  display: flex;
`

const HalfContainer = styled.div`
  flex: 1;
  heigh: 90vh;
  border-left: 0.2rem solid #ebebeb;
`

const HomePage = () => {
  return (
    <Fragment>
      <LayoutContainer>
        <SNB cur="home" />
        <ContentDiv>
          <MainLeftTemplate>ddfdfdf</MainLeftTemplate>
          <HalfContainer>dfddf</HalfContainer>
        </ContentDiv>
      </LayoutContainer>
    </Fragment>
  )
}

export default HomePage
