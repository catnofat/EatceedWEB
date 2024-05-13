import styled from 'styled-components'
import noti from '../../assets/noti.svg'

const NotiContainer = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
`

const NotiLogo = ({ onClick }) => {
  return (
    <NotiContainer onClick={onClick}>
      <img
        width={'100%'}
        height={'100%'}
        src={noti}
        alt="User Icon"
      />
    </NotiContainer>
  )
}
export default NotiLogo
