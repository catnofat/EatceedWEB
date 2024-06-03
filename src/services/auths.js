import { instance } from './index'

//apis using at login, register

export const login = data => {
  const { email, password } = data
  return instance
    .post('/v1/auth/login', {
      email,
      password
    })
    .then(res => {
      console.log(res)
      return res
    })
}
