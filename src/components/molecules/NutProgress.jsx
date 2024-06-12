import Progressbar from '../atoms/Progressbar'
import styled from 'styled-components'

const Progressdiv = styled.div`
  width: 10rem;
`
const UpperText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const Text = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  font-size: ${props => props.size};
  font-family: pretendardBold;
`

const LowerText = styled.div`
  color: #333332;
  text-align: center;
`
const NutProgress = ({ nuturition, intake, required }) => {
  const intakep = Math.ceil((intake / required) * 100)
  return (
    <Progressdiv>
      <UpperText>
        <Text size="1rem">{nuturition}</Text>
        <Text size="1.6rem">{intakep}%</Text>
      </UpperText>
      <Progressbar percent={intakep} />
      <LowerText>
        <Text size="1.2rem">
          {intake}g/{required}g
        </Text>
      </LowerText>
    </Progressdiv>
  )
}

export default NutProgress
