import styled from 'styled-components'
import LiquidGaugeWidget from '../atoms/LiquidGuageWidget'
import Checkbox from '../atoms/Checkbox'
import NutProgress from '../molecules/NutProgress'
import Kgdiffgroup from '../molecules/KgdiffGroup'
import messageicon from '../../assets/message.svg'
import { useQuery } from '@tanstack/react-query'
import { getMeal } from '../../services/meal'
import { getDateMeal } from '../../services/meal'

const HalfContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  align-items: center;
  flex: 1;
  heigh: 90vh;
  border-left: 0.2rem solid #ebebeb;
`
const Textdiv = styled.div`
  margin-top: 4vh;
  margin-bottom: 4vh;
  text-align: center;
`
const Text = styled.div`
  font-size: ${props => props.size};
  font-family: pretendardBold;
`
const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 4vh;
  margin-bottom: 4vh;
`
const Guagediv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const Emptydiv = styled.div`
  width: 4.5rem;
`
const Checkboxdiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: pretendard;
  font-size: 1rem;
  text-align: center;
`
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 2rem;
  height: 70px;
  color: white;
  border: 0.1rem solid #ffa14f;
  border-radius: 0.6rem;
  background: linear-gradient(270deg, #ffbd84 0%, #ff9233 100%);
  box-shadow: 1px 4px 5px 0px rgba(0, 0, 0, 0.05);
`

const Icondiv = styled.div`
  border-color: transparent;
  width: 4.5rem;
  height: 2.5rem;
  background-image: url(${messageicon});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`
const today = new Date()
const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`

const MainLeftTemplate = () => {
  const {
    data: todaymeal,
    error,
    isLoading
  } = useQuery({
    queryKey: ['meal'],
    queryFn: async () => {
      const res = await getMeal()
      return res.data
    }
  })

  const response = todaymeal?.response

  return (
    <HalfContainer>
      <Textdiv>
        <Text size="1.4rem">{formattedDate}</Text>
        <Text size="2rem">오늘</Text>
      </Textdiv>
      <Guagediv>
        <Emptydiv></Emptydiv>
        <LiquidGaugeWidget
          value={1200}
          color="#4fbafe"
          title="Revenue"
        />
        <Checkboxdiv>
          등록현황
          <Checkbox
            text="아침"
            checked={true}
          />
          <Checkbox
            text="점심"
            checked={false}
          />
          <Checkbox
            text="저녁"
            checked={true}
          />
        </Checkboxdiv>
      </Guagediv>
      <ProgressContainer>
        <NutProgress
          nuturition="탄수화물"
          intake={100}
          required={200}
        />
        <NutProgress
          nuturition="단백질"
          intake={130}
          required={990}
        />
        <NutProgress
          nuturition="지방"
          intake={260}
          required={330}
        />
      </ProgressContainer>
      <Kgdiffgroup />
      <TextContainer>
        <Icondiv></Icondiv>
        <Text size="1.2rem">저번 주 식단분석결과가 나왔어요!</Text>
      </TextContainer>
    </HalfContainer>
  )
}

export default MainLeftTemplate
