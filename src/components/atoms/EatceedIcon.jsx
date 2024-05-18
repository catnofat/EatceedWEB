import styled from 'styled-components'

const Titlediv = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`

const MainTitle = styled.div`
  font-size: 4rem;
  color: #fe902f;
  font-family: Pretendardbold;
`

const SubTitle = styled.div`
  font-size: 1.2rem;
  color: black;
  font-family: Pretendard;
`

const EatceedIcon = () => {
  return (
    <Titlediv>
      <MainTitle>Eatceed</MainTitle>
      <SubTitle>챙겨 먹는 즐거움</SubTitle>
    </Titlediv>
  )
}

export default EatceedIcon
