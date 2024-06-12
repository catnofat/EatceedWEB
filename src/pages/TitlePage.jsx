import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import EatceedIcon from '../components/atoms/EatceedIcon'

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  width: 85vw;
  height: 45px;
  font-size: 1.6rem;
  background-color: ${props => props.bgcolor};
  color: ${props => props.txtcolor};
  font-family: pretendard;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 500px) {
    width: 50vw;
  }
`

const TitlePage = () => {
  const navigate = useNavigate()
  const weblogin = () => {
    navigate('/login')
  }
  const webregister = () => {
    navigate('/register')
  }

  return (
    <TitleContainer>
      <EatceedIcon />
      <Button
        bgcolor="#fe902f"
        txtcolor="white"
        onClick={weblogin}>
        로그인
      </Button>
      <Button
        bgcolor="white"
        txtcolor="black"
        onClick={webregister}>
        회원가입
      </Button>
      <Button
        bgcolor="white"
        txtcolor="black"
        onClick={() => window.open('https://play.google.com/')}>
        앱 설치
      </Button>
    </TitleContainer>
  )
}

export default TitlePage
