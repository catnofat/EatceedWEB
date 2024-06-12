import React, { useState, useRef, useEffect } from 'react'
import Checkbox from '../atoms/Checkbox'
import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
`
const CheckboxLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10vw;
  margin-right: 10vw;
  font-family: Pretendard;
  font-size: 1.2rem;
`

const Morewatch = styled.div`
  color: #888888;
  font-size: 0.8rem;
  font-family: Pretendard;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`

const Popup = styled.div`
  position: fixed;
  width: 70vw;
  height: 50vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 2;
`

const CheckboxGroup = ({ setCheckValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [service, setService] = useState(false)
  const [privateinfo, setPrivateinfo] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (service && privateinfo) {
      setCheckValue(true)
    } else {
      setCheckValue(false)
    }
  }, [service, privateinfo])

  return (
    <Div>
      <CheckboxLine>
        <Checkbox
          checked={privateinfo}
          onChange={setPrivateinfo}
          text="개인 정보 활용 동의"
        />
        <Morewatch onClick={() => setIsOpen(!isOpen)}>
          자세히 보기 &#62;
        </Morewatch>
      </CheckboxLine>
      <CheckboxLine>
        <Checkbox
          checked={service}
          onChange={setService}
          text="이용 약관 동의"
        />
        <Morewatch onClick={() => setIsOpen(!isOpen)}>
          자세히 보기 &#62;
        </Morewatch>
      </CheckboxLine>
      {isOpen && <Popup ref={ref}>팝업창 내용</Popup>}
    </Div>
  )
}

export default CheckboxGroup
