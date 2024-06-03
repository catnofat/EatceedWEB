import { Outlet, useNavigate } from 'react-router-dom'
import GNB from '../components/molecules/GNB'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearUser } from '../store/slices/userSlice'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 100vw;
  height: 100vh;
`

const MainLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let expirationTime = useSelector(state => {
    return state.user?.expirationTime
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // expirationTime이 되지 않았을 경우 새로고침 시 로그인 유지, 넘었다면 로그아웃
      if (expirationTime && Date.now() > parseInt(expirationTime, 10)) {
        localStorage.removeItem('token')
        dispatch(clearUser())
      }
    } else if (token === null) {
      navigate('/login')
    }
  }, [navigate])
  return (
    <StyledDiv>
      <GNB />
      <Outlet />
    </StyledDiv>
  )
}

export default MainLayout
