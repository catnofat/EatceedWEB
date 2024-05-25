import styled from 'styled-components'

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  height: 70px;
  border: 0.1rem solid #ffa14f;
  border-radius: 0.6rem;
`

const Textdiv = styled.div`
  margin-left: 1.7rem;
  display: flex;
  align-items: center;
`

const Diffdiv = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 3rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.3rem;
`

const Text = styled.div`
  font-size: ${props => props.size};
  font-family: pretendardBold;
`

const currentkg = 60
const targetkg = 72
const weekdiff = 5

const Kgdiffgroup = () => {
  return (
    <TextContainer>
      <Textdiv>
        <Text size="1.2rem">현재체중&nbsp;</Text>
        <Text size="1.4rem"> {currentkg}kg</Text>
        <Diffdiv>
          <Text
            size="1rem"
            color="rgba(0, 0, 0, 0.6)">
            저번주 대비 {Math.abs(weekdiff)}kg {weekdiff >= 0 ? '증가' : '감소'}
            했어요
          </Text>
        </Diffdiv>
      </Textdiv>
      <Textdiv>
        <Text
          size="1.2rem"
          color="gray">
          목표체중&nbsp;
        </Text>
        <Text size="1.4rem">{targetkg}kg</Text>
      </Textdiv>
    </TextContainer>
  )
}

export default Kgdiffgroup
