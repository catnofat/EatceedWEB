import styled from 'styled-components'
import logout from '../../assets/logout.svg'

const LogoutContainer = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  @media (min-width: 500px) {
    width: 40px;
    height: 40px;
  }
`

const LogoutIcon = ({ onClick }) => {
  return (
    <LogoutContainer onClick={onClick}>
      <img
        width={'100%'}
        height={'100%'}
        src={logout}
        alt="logout Icon"
      />
    </LogoutContainer>
  )
}
export default LogoutIcon
