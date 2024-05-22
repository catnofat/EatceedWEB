import { Fragment } from 'react'
import SNB from '../components/molecules/SNB'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
`

const SectionContainer = styled.div`
  width: 50%;
`

const HomePage = () => {
  return (
    <Fragment>
      <LayoutContainer>
        <SNB cur="home" />
        <SectionContainer></SectionContainer>
      </LayoutContainer>
    </Fragment>
  )
}

export default HomePage
