import SNB from '../components/molecules/SNB'
import styled, { keyframes } from 'styled-components'
import qrexample from '../assets/qrexample.png'

const LayoutContainer = styled.div`
  display: flex;
  overflow-x: hidden;
`

const type = keyframes`
from{box-shadow: inset -3px 0px 0px #888;}
to{box-shadow: inset -3px 0px 0px transparent;}`

const Containerdiv = styled.div`
  margin: auto;
  align-items: center;
`

const Textdiv1 = styled.div`
  font-family: PretendardBold;
  color: #fe902f;
  font-size: 5rem;
`

const Textdiv2 = styled.div`
  font-family: Pretendard;
  color: black;
  font-size: 1.5rem;
  display: inline-block;
  padding-right: 12px;
  animation: ${type} 0.5s alternate infinite;
`

const Imgdiv = styled.div`
  border-color: transparent;
  width: 20rem;
  height: 20rem;
  background-image: url(${qrexample});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

const MyPage = () => {
  return (
    <LayoutContainer>
      <SNB cur="user" />
      <Containerdiv>
        <Textdiv1>현재 기능은 웹에서 지원하지 않습니다</Textdiv1>
        <Textdiv2>
          식사 등록, 내 정보, 백그라운드 알람등의 기능을 사용할 수 있는 앱을
          사용해 보세요{' '}
        </Textdiv2>
        <Imgdiv></Imgdiv>
      </Containerdiv>
    </LayoutContainer>
  )
}

export default MyPage
