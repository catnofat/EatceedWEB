import './TitlePage.css'
import { useNavigate } from 'react-router-dom'

const TitlePage = () => {
  const navigate = useNavigate()
  const webclick = () => {
    navigate('/login')
  }

  return (
    <div className="background">
      <div className="textarea">
        <div className="smalltext">#음식 #기록</div>
        <div className="smalltext">#건강 #식단관리</div>
        <div className="bigtext">EATceed</div>
      </div>

      <div className="buttonarea">
        <div
          className="buttonw"
          onClick={webclick}>
          웹버전 로그인
        </div>
        <div
          className="buttonb"
          onClick={() => window.open('https://play.google.com/')}>
          어플 다운로드
        </div>
      </div>
    </div>
  )
}

export default TitlePage
