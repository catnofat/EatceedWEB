import styled from 'styled-components'
import RegInputGroup from '../molecules/RegInputGroup'
import EatceedIcon from '../atoms/EatceedIcon'

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
      <RegInputGroup />
    </Templatediv>
  )
}

export default RegisterTemplate
