import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import TitleLogo from '../atoms/TitleLogo'
import UserIcon from '../atoms/UserIcon'

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
const PopUp = styled.div`
  cursor: pointer;
  color: black;
  text-align: center;
  font-family: Pretendard;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin-right: 16px;
  display: ${props => (props.$show ? 'block' : 'none')};
  @media (min-width: 500px) {
    font-size: 2rem;
  }
`
const UserLogo = styled.div`
  height: 75px;
  display: flex;
  margin-right: 5%;
  vertical-align: middle;
  align-items: center;
`
const Hoverdiv = styled.div`
  &:hover {
    background: gray;
    color: white;
    transition: 0.5s;
  }
`
const GNB = () => {
  const [showPopUp, setShowPopUp] = useState(false)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/home')
  }

  const handleUserIconClick = () => {
    setShowPopUp(!showPopUp)
  }

  const logoutClick = () => {
    console.log('Logout clicked')
  }

  return (
    <GNBContainer>
      <TitleLogo
        lrmargin="5%"
        color="white"
        size="2rem"
        onClick={handleLogoClick}></TitleLogo>
      <UserLogo>
        <PopUp $show={showPopUp}>
          <Hoverdiv onClick={logoutClick}>로그아웃 하기</Hoverdiv>
        </PopUp>
        <UserIcon onClick={handleUserIconClick}></UserIcon>
      </UserLogo>
    </GNBContainer>
  )
}

export default GNB
