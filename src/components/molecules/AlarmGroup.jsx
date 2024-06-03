import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import alarmsound from '../../assets/alarmsound.mp3'

const Containerdiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-grow: 1;
  justify-contents: center;
  text-align: center;
`

const Groupdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`

const Clockdiv = styled.div`
  color: #fe902f;
  font-family: PretendardBold;
  font-size: 5rem;
  margin-bottom: 2rem;
`
const Alarmsetdiv = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  font-family: Pretendard;
  margin-bottom: 1rem;
  font-size: 2rem;
`
const Styledlabel = styled.label`
  margin-right: 1rem;
`
const Styledbutton = styled.button`
  width: 20rem;
  height: 5rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #fe902f;
  font-size: 2rem;
  font-family: PretendardBold;
  color: white;
`

const Textdiv = styled.div`
  font-size: 2rem;
  font-family: Pretendard;
`
const AlarmGroup = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [alarmTime, setAlarmTime] = useState('')
  const [alarmName, setAlarmName] = useState('')
  const [isAlarmSet, setIsAlarmSet] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const beepRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSetAlarm = () => {
    if (alarmTime) {
      const [hours, minutes] = alarmTime.split(':').map(Number)
      const now = new Date()
      let alarmDate = new Date()
      alarmDate.setHours(hours, minutes, 0, 0)

      if (alarmDate < now) {
        alarmDate.setDate(alarmDate.getDate() + 1)
      }

      const timeDiff = alarmDate - now
      setTimeLeft(timeDiff)
      setIsAlarmSet(true)
    }
  }

  const handleOffAlarm = () => {
    setIsAlarmSet(false)
  }

  useEffect(() => {
    let timer
    if (isAlarmSet && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1000)
      }, 1000)
    } else if (isAlarmSet && timeLeft <= 0) {
      beepRef.current.play()
      setIsAlarmSet(false)
    }
    return () => clearTimeout(timer)
  }, [isAlarmSet, timeLeft])

  const formatTime = date => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <Containerdiv>
      <audio
        ref={beepRef}
        src={alarmsound}
        id="beep"></audio>

      <Groupdiv>
        <Clockdiv>{formatTime(currentTime)}</Clockdiv>
        {!isAlarmSet && (
          <>
            <Alarmsetdiv>
              <Styledlabel htmlFor="alarmTime">
                알람을 언제 설정하실 건가요?
              </Styledlabel>
              <input
                type="time"
                id="alarmTime"
                value={alarmTime}
                onChange={e => setAlarmTime(e.target.value)}
              />
            </Alarmsetdiv>
            <Alarmsetdiv>
              <Styledlabel>알람 이름을 설정하세요.</Styledlabel>
              <input
                type="text"
                id="alarmName"
                value={alarmName}
                onChange={e => setAlarmName(e.target.value)}
              />
            </Alarmsetdiv>{' '}
            <Styledbutton
              className="btn"
              onClick={handleSetAlarm}
              disabled={isAlarmSet}>
              설정하기
            </Styledbutton>
          </>
        )}

        {isAlarmSet && (
          <Textdiv>
            <div>{alarmName}</div>
            <div>
              {Math.floor(timeLeft / 1000 / 3600)}시간{' '}
              {Math.floor((timeLeft / 60000) % 60)} 분{' '}
              {Math.floor((timeLeft / 1000) % 60)} 초 남았어요!
            </div>
            <Styledbutton
              className="btn"
              onClick={handleOffAlarm}>
              취소하기
            </Styledbutton>
          </Textdiv>
        )}
      </Groupdiv>
    </Containerdiv>
  )
}

export default AlarmGroup
