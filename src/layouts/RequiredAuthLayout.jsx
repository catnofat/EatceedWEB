import { Outlet } from 'react-router-dom'

const RequiredAuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default RequiredAuthLayout
