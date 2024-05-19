import styled from 'styled-components'
import InputGroup from '../molecules/InputGroup'
import EatceedIcon from '../atoms/EatceedIcon'

const Templatediv = styled.div`
  margin-top: 7vh;
  @media (min-width: 500px) {
    margin-top: 10vh;
  }
`
const FindPassword = styled.div`
  display: block;
  margin: auto;
  color: #bcbcbc;
  font-size: 1.2rem;
  font-family: pretendard;
  text-decoration-line: underline;
  text-align: center;
`
const LoginTempalte = () => {
  return (
    <Templatediv>
      <EatceedIcon />
      <InputGroup />
      <FindPassword>비밀번호가 기억이 안 난다면?</FindPassword>
    </Templatediv>
  )
}

export default LoginTempalte