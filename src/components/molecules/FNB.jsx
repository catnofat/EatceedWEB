import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import alarm from '../../assets/alarm.png'
import alarmsel from '../../assets/alarmsel.png'
import cal from '../../assets/cal.png'
import calsel from '../../assets/calsel.png'
import home from '../../assets/home.png'
import homesel from '../../assets/homesel.png'
import report from '../../assets/report.png'
import reportsel from '../../assets/reportsel.png'
import user from '../../assets/user.png'
import usersel from '../../assets/usersel.png'

const FNBContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 10vh;
  border-top: 0.5px solid #ebebeb;
  justify-content: space-around;
  align-items: center;
  background-color: #fffefd;
`
const ButtonContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
`
const HomeImage = styled.div`
  margin: auto;
  background: url(${props => (props.$cur === 'home' ? homesel : home)});
  background-size: cover;
  width: 22px;
  height: 22px;
  @media (min-width: 500px) {
    width: 35px;
    height: 35px;
  }
`
const CalImage = styled.div`
  margin: auto;
  background: url(${props => (props.$cur === 'calendar' ? calsel : cal)});
  background-size: cover;
  width: 22px;
  height: 22px;
  @media (min-width: 500px) {
    width: 35px;
    height: 35px;
  }
`
const RepImage = styled.div`
  margin: auto;
  background: url(${props => (props.$cur === 'report' ? reportsel : report)});
  background-size: cover;
  width: 22px;
  height: 22px;
  @media (min-width: 500px) {
    width: 35px;
    height: 35px;
  }
`
const AlarmImage = styled.div`
  margin: auto;
  background: url(${props => (props.$cur === 'alarm' ? alarmsel : alarm)});
  background-size: cover;
  width: 22px;
  height: 22px;
  @media (min-width: 500px) {
    width: 38px;
    height: 35px;
  }
`
const UserImage = styled.div`
  margin: auto;
  background: url(${props => (props.$cur === 'user' ? usersel : user)});
  background-size: cover;
  width: 22px;
  height: 22px;
  @media (min-width: 500px) {
    width: 35px;
    height: 35px;
  }
`
const Text = styled.div`
  margin-top: 6.5px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2rem;
  @media (min-width: 500px) {
    font-size: 2rem;
  }
`

const FNB = ({ cur }) => {
  const navigate = useNavigate()
  const homeClick = () => {
    navigate('/home')
  }
  const calendarClick = () => {
    navigate('/calendar')
  }
  const reportClick = () => {
    navigate('/report')
  }
  const alarmClick = () => {
    navigate('/alarm')
  }
  const myClick = () => {
    navigate('/my')
  }

  return (
    <FNBContainer>
      <ButtonContainer onClick={homeClick}>
        <HomeImage $cur={cur}></HomeImage>
        <Text>홈</Text>
      </ButtonContainer>
      <ButtonContainer onClick={calendarClick}>
        <CalImage $cur={cur}></CalImage>
        <Text>캘린더</Text>
      </ButtonContainer>
      <ButtonContainer onClick={reportClick}>
        <RepImage $cur={cur}></RepImage>
        <Text>분석</Text>
      </ButtonContainer>
      <ButtonContainer onClick={alarmClick}>
        <AlarmImage $cur={cur}></AlarmImage>
        <Text>알람</Text>
      </ButtonContainer>
      <ButtonContainer onClick={myClick}>
        <UserImage $cur={cur}></UserImage>
        <Text>마이 메뉴</Text>
      </ButtonContainer>
    </FNBContainer>
  )
}

export default FNB
