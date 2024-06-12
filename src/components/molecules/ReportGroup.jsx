import styled from 'styled-components'
import thumbup from '../../assets/thumbup.svg'

const Containerdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex-grow: 1;
  justify-contents: center;
  text-align: center;
`

const MainContentbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 90%;
  height: auto;
  border-style: solid;
  border-width: 1px;
  border-radius: 1.5rem;
  border-color: rgba(255, 126, 13, 0.15);
  background-color: rgba(255, 126, 13, 0.05);
`

const Titlediv = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;

  border-radius: 5rem;
  width: 30%;
  height: 5rem;
  line-height: 5rem;
  background-color: #ff7e0d;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 1.5rem;
  font-family: Pretendard;
  color: white;
`
const Detaileddiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  border-radius: 5rem;
  width: 40%;
  height: 4rem;
  line-height: 4rem;
  background-color: #ff7e0d;
  text-align: center;
  font-size: 1.5rem;
  font-family: Pretendard;
  color: white;
`
const Titletext = styled.div`
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-family: ${props => props.font};
`
const Titletext2 = styled.div`
  display: inline;
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin-top: 2rem;
  font-family: ${props => props.font};
`

const TextContainer = styled.div`
  margin-top: ${props => props.mtop};
  margin-bottom: ${props => props.mbot};
  margin-right: ${props => props.mrig};
  font-family: Pretendard;
`

const Titleimg = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  background-color: rgba(255, 126, 13, 0.12);
`
const ReportGroup = () => {
  const today = new Date()
  const formattedDate = `${today.getMonth() + 1}월 ${today.getDate() - 7}일~${today.getMonth() + 1}월 ${today.getDate()}일`

  return (
    <Containerdiv>
      <MainContentbox>
        <Titlediv>분석 결과</Titlediv>
        <Titletext
          size="1.5rem"
          color="#ff7e0d"
          font="PretendardBold">
          {formattedDate}
        </Titletext>
        <Titletext
          size="2rem"
          font="PretendardBold">
          목표 섭취량을 달성하셨어요!
        </Titletext>
        <Titleimg>
          <img
            src={thumbup}
            width={100}
            height={100}
          />
        </Titleimg>
        <Detaileddiv>주간 영양소 상세보기</Detaileddiv>
        <TextContainer
          mtop="2rem"
          mbot="2rem">
          <Titletext2 size="1.5rem">평균 칼로리 섭취량은</Titletext2>
          <Titletext2
            size="1.5rem"
            color="#ff7e0d"
            font="PretendardBold">
            &nbsp;3264kcal
          </Titletext2>
          <Titletext2
            size="1.5rem"
            font="Pretendard">
            &nbsp;입니다.
          </Titletext2>
        </TextContainer>
      </MainContentbox>
      <TextContainer mtop="3rem">
        <Titletext2
          size="1.2rem"
          font="PretendardBold">
          지금처럼 지속적으로 섭취하면 체중이
        </Titletext2>
        <Titletext2
          size="1.2rem"
          color="#19a53e"
          font="PretendardBold">
          &nbsp;증가
        </Titletext2>
        <Titletext2
          size="1.2rem"
          font="PretendardBold">
          할 거에요.
        </Titletext2>
      </TextContainer>
      <TextContainer mtop="0.5rem">
        <Titletext2 size="1.2rem">탄수화물 섭취량이</Titletext2>
        <Titletext2
          size="1.2rem"
          color="#19a53e">
          &nbsp;적절해요.
        </Titletext2>
      </TextContainer>
      <TextContainer>
        <Titletext2 size="1.2rem">단백질 섭취량이</Titletext2>
        <Titletext2
          size="1.2rem"
          color="#19a53e">
          &nbsp; 적절해요.
        </Titletext2>
      </TextContainer>
      <TextContainer>
        <Titletext2 size="1.2rem">지방 섭취량이</Titletext2>
        <Titletext2
          size="1.2rem"
          color="#19a53e">
          &nbsp; 적절해요.
        </Titletext2>
      </TextContainer>
      <TextContainer mtop="3rem">
        <Titletext2
          size="1.2rem"
          font="PretendardBold">
          건강한 증량을 위해서 이렇게 해 보세요!
        </Titletext2>
      </TextContainer>
      <TextContainer mtop="0.5rem">
        <Titletext2 size="1.2rem">
          - 균형감 있는 식단과 운동을 병행하세요.
        </Titletext2>
      </TextContainer>
      <TextContainer mtop="0.5rem">
        <Titletext2 size="1.2rem">
          - 한 번에 몰아 먹기보단 규칙적인 식사를 드셔보세요.
        </Titletext2>
      </TextContainer>
    </Containerdiv>
  )
}

export default ReportGroup
