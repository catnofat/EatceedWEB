import GNB2 from '../components/molecules/GNB2'
import LoginTempalte from '../components/templates/LoginTemplate'
import styled from 'styled-components'

const Pagediv = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`
const LoginPage = () => {
  return (
    <Pagediv>
      <GNB2 text="로그인"></GNB2>
      <LoginTempalte />
    </Pagediv>
  )
}

export default LoginPage
