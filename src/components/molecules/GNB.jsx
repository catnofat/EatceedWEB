import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import './GNB.css'
import TitleLogo from '../atoms/TitleLogo'
import UserIcon from '../atoms/NotiLogo'

const GNBContainer = styled.div`
  display: flex;
  height: 7vh;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`
const PopUp = styled.div`
  cursor: pointer;
  width: 100px;
  color: black;
  text-align: center;
  font-family: Pretendard;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin-right: 16px;
  display: ${props => (props.$show ? 'block' : 'none')};
`
const NotiLogo = styled.div`
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
    console.log('Logo clicked')
    navigate('/calendar')
  }

  const handleUserIconClick = () => {
    setShowPopUp(!showPopUp)
  }

  const logoutClick = () => {
    console.log('Logout clicked')
    navigate('/')
  }
  const myinfoClick = () => {
    console.log('myinfo clicked')
    navigate('/myinfo')
  }

  return (
    <GNBContainer>
      <TitleLogo
        lrmargin="5%"
        color="white"
        size="20px"
        onClick={handleLogoClick}></TitleLogo>
      <NotiLogo>
        <PopUp $show={showPopUp}>
          <Hoverdiv onClick={logoutClick}>로그아웃</Hoverdiv>
          <Hoverdiv onClick={myinfoClick}>유저정보</Hoverdiv>
        </PopUp>
        <UserIcon onClick={handleUserIconClick}></UserIcon>
      </NotiLogo>
    </GNBContainer>
  )
}

export default GNB
