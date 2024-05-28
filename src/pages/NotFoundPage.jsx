import styled, { keyframes } from 'styled-components'

const Containerdiv = styled.div`
  margin: auto;
  align-items: center;
`
const type = keyframes`
from{box-shadow: inset -3px 0px 0px #888;}
to{box-shadow: inset -3px 0px 0px transparent;}`
const Textdiv1 = styled.div`
  font-family: PretendardBold;
  color: #fe902f;
  font-size: 5rem;
`
const Textdiv2 = styled.div`
  font-family: Pretendard;
  color: black;
  font-size: 3rem;
  display: inline-block;
  padding-right: 12px;
  animation: ${type} 0.5s alternate infinite;
`

const NotFoundPage = () => {
  return (
    <Containerdiv>
      <Textdiv1>404 Not found!</Textdiv1>
      <Textdiv2>해당 페이지가 존재하지 않습니다</Textdiv2>
    </Containerdiv>
  )
}

export default NotFoundPage
