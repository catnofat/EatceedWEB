import styled from 'styled-components'
import InputGroup from '../molecules/InputGroup'
import EatceedIcon from '../atoms/EatceedIcon'
import CheckboxGroup from '../molecules/CheckboxGroup'

const Templatediv = styled.div`
  margin-top: 7vh;
  @media (min-width: 500px) {
    margin-top: 10vh;
  }
`

const RegisterTemplate = () => {
  return (
    <Templatediv>
      <EatceedIcon />
      <InputGroup />
      <CheckboxGroup />
    </Templatediv>
  )
}

export default RegisterTemplate
