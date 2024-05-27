import styled from 'styled-components'
import GNB2 from '../components/molecules/GNB2'
import EatceedIcon from '../components/atoms/EatceedIcon'
import { useLocation } from 'react-router-dom'

const Pagediv = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`
const Templatediv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7vh;
  @media (min-width: 500px) {
    margin-top: 10vh;
  }
`

const Textdiv = styled.div`
  font-size: 1.4rem;
  font-family: Pretendard;
  margin-left: 7vw;
  margin-right: 7vw;
  text-align: center;
`
const Button = styled.button`
  width: 85vw;
  height: 45px;
  font-size: 1.6rem;
  background-color: '#f5f5f5';
  color: black;
  font-family: pretendard;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`

const EmailVerificationPage = () => {
  const location = useLocation()
  const idValue = location.state.id

  return (
    <Pagediv>
      <GNB2 text="이메일 인증"></GNB2>
      <Templatediv>
        <EatceedIcon />
        <Textdiv>
          이메일이 {idValue}로 전송되었습니다.이메일의 링크를 클릭한 뒤 아래
          버튼을 통해 다시 로그인해주세요.
        </Textdiv>
        <Button>확인</Button>
      </Templatediv>
    </Pagediv>
  )
}

export default EmailVerificationPage
