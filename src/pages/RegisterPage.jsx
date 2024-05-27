import GNB2 from '../components/molecules/GNB2'
import RegisterTemplate from '../components/templates/RegisterTemplate'
import styled from 'styled-components'

const Pagediv = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`
const RegisterPage = () => {
  return (
    <Pagediv>
      <GNB2 text="가입하기"></GNB2>
      <RegisterTemplate />
    </Pagediv>
  )
}

export default RegisterPage
