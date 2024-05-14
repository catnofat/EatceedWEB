import styled from 'styled-components'
import user from '../../assets/user.svg'

const UserContainer = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  @media (min-width: 500px) {
    width: 40px;
    height: 40px;
  }
`

const UserIcon = ({ onClick }) => {
  return (
    <UserContainer onClick={onClick}>
      <img
        width={'100%'}
        height={'100%'}
        src={user}
        alt="User Icon"
      />
    </UserContainer>
  )
}
export default UserIcon
