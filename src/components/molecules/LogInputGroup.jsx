import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { login } from '../../assets/services/auths'
import { useForm } from 'react-hook-form'

// Using styled-components library for CSS in JS styling.

const Inputform = styled.form`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`
const IdInput = styled.input`
  width: 90vw;
  height: 38px;
  margin-bottom: 20px;
  font-size: 18px;
  font-family: pretendard;
  color: black;
  border-bottom: 1.5px solid #e1e1e1;
  border-top: none;
  border-left: none;
  border-right: none;
  &::placeholder {
    color: #bcbcbc;
  }
`
const PwInput = styled.input`
  width: 90vw;
  height: 38px;

  margin-bottom: 20px;
  font-size: 18px;
  font-family: pretendard;
  color: black;
  border-bottom: 1.5px solid #e1e1e1;
  border-top: none;
  border-left: none;
  border-right: none;
  &::placeholder {
    color: #bcbcbc;
  }
`
const Button = styled.button`
  width: 85vw;
  height: 45px;
  font-size: 1.6rem;
  background-color: ${({ $filled }) => ($filled ? '#fe902f' : '#f5f5f5')};
  color: ${({ $filled }) => ($filled ? 'white' : '#bbbbbb')};
  font-family: pretendard;
  margin-bottom: 15px;
`

const LogInputGroup = () => {
  // State management of login Error
  const [loginError, setLoginError] = useState('')

  // Manage Page movement
  const navigate = useNavigate()

  // Used to send or import data to a server
  const mutation = useMutation({
    mutationFn: data => {
      return login(data)
    }
  })

  // form management
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all'
  })

  return (
    <Inputform
      noValidate
      onSubmit={handleSubmit(data => {
        console.log(data)
        mutation.mutate(data, {
          onSuccess: response => {
            console.log(response)
            console.log(data)
            localStorage.setitem('token', response.headers.authorization)
            navigate('/home')
          },
          onError: error => {
            if (error.response?.data?.error) {
              setLoginError(
                <>
                  <div>오류: {error.response?.data?.error?.message}</div>
                  <div>아이디 또는 비밀번호가 잘못되었습니다</div>
                </>
              )
            } else {
              setLoginError(
                '로그인에 실패했습니다. 아이디 또는 비밀번호를 다시 확인해주세요.'
              )
            }
          }
        })
      })}>
      <IdInput
        type="email"
        placeholder="아이디"
        name="이메일 입력"
        {...register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.'
          }
        })}
      />
      {errors.email && <small role="alert">{errors.email.message}</small>}

      <PwInput
        type="password"
        name="패스워드 입력"
        placeholder="비밀번호"
        {...register('password', {
          required: '비밀번호는 필수 입력입니다.'
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <Button
        $filled={!isSubmitting}
        disabled={isSubmitting}>
        확인
      </Button>
      {loginError && <p>{loginError}</p>}
    </Inputform>
  )
}

export default LogInputGroup
