import styled from 'styled-components'
import InputGroup from '../molecules/InputGroup'
import EatceedIcon from '../atoms/EatceedIcon'

const Templatediv = styled.div`
  margin-top: 7vh;
  @media (min-width: 500px) {
    margin-top: 10vh;
  }
`

const LoginTempalte = () => {
  return (
    <Templatediv>
      <EatceedIcon />
      <InputGroup />
    </Templatediv>
  )
}

export default LoginTempalte
