import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import TitleLogo from '../atoms/TitleLogo'
import LogoutIcon from '../atoms/LogoutIcon'

const GNBContainer = styled.div`
  display: flex;
  height: 7vh;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #fe902f;
  @media (min-width: 500px) {
    height: 10vh;
  }
`

const LogoutLogo = styled.div`
  height: 75px;
  display: flex;
  margin-right: 5%;
  vertical-align: middle;
  align-items: center;
`

const GNB = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/home')
  }

  const logoutClick = () => {
    navigate('/')
  }

  return (
    <GNBContainer>
      <TitleLogo
        lrmargin="5%"
        color="white"
        size="2rem"
        onClick={handleLogoClick}></TitleLogo>
      <LogoutLogo>
        <LogoutIcon onClick={logoutClick}></LogoutIcon>
      </LogoutLogo>
    </GNBContainer>
  )
}

export default GNB
