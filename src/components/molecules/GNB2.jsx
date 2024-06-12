import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import prev from '../../assets/prev.png'

const GNBContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  height: 7vh;
  justify-content: space-between;
  align-items: center;
  font-family: pretendardBold;
  font-size: 1.6rem;
  color: black;
  @media (min-width: 500px) {
    height: 10vh;
  }
`
const Boxdiv = styled.div`
  display: flex;
  width: 10vw;
  height: 100%;
`
const Imgdiv = styled.div`
  width: 10px;
  height: 20px;
  background: url(${prev});
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
`

const Textdiv = styled.div``

const GNB2 = ({ text }) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <GNBContainer>
      <Boxdiv onClick={handleGoBack}>
        <Imgdiv></Imgdiv>
      </Boxdiv>
      <Textdiv>{text}</Textdiv>
      <Boxdiv></Boxdiv>
    </GNBContainer>
  )
}

export default GNB2
