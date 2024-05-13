import { Outlet } from 'react-router-dom'
import GNB from '../components/molecules/GNB'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #fe902f;
`

const MainLayout = () => {
  return (
    <StyledDiv>
      <GNB />
      <Outlet />
    </StyledDiv>
  )
}

export default MainLayout
