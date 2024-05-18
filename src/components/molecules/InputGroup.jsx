import styled from 'styled-components'
import { useState } from 'react'

const Inputdiv = styled.div`
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
`
const PwInput = styled.input`
  width: 90vw;
  height: 38px;
  margin-bottom: 20px;
`

const Button = styled.button`
  width: 85vw;
  height: 45px;
  font-size: 1.6rem;
  background-color: ${({ filled }) => (filled ? '#fe902f' : '#f5f5f5')};
  color: ${({ filled }) => (filled ? 'white' : '#bbbbbb')};
  font-family: pretendard;
`

const InputGroup = () => {
  const [idValue, setIdValue] = useState('') // id 입력 값 상태
  const [pwValue, setPwValue] = useState('') // pw 입력 값 상태

  const handleIdChange = e => {
    setIdValue(e.target.value) // id 입력 값 업데이트
  }

  const handlePwChange = e => {
    setPwValue(e.target.value) // pw 입력 값 업데이트
  }

  const isFilled = idValue && pwValue // 둘 다 값이 있으면 true

  return (
    <Inputdiv>
      <IdInput
        type="text"
        name="이메일 입력"
        placeholder="이메일"
        onChange={handleIdChange}
      />
      <PwInput
        type="password"
        name="패스워드 입력"
        placeholder="비밀번호"
        onChange={handlePwChange}
      />
      <Button
        filled={isFilled}
        disabled={!isFilled}>
        확인
      </Button>
    </Inputdiv>
  )
}

export default InputGroup
