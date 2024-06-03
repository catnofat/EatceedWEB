import styled from 'styled-components'
import LiquidGaugeWidget from '../atoms/LiquidGuageWidget'
import Checkbox from '../atoms/Checkbox'
import NutProgress from '../molecules/NutProgress'
import Kgdiffgroup from '../molecules/KgdiffGroup'
import messageicon from '../../assets/message.svg'
import { useQuery } from '@tanstack/react-query'
import { getMeal } from '../../services/meal'
import { getDateMeal } from '../../services/meal'
import { useState, useEffect } from 'react'

// CSS
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
const mealRecord = [
  {
    time: {
      hour: 7,
      minute: 0,
      second: 0,
      nano: 0
    },
    mealType: 'BREAKFAST',
    imageUri: 'string',
    foods: [
      {
        id: 0,
        name: '간장계란볶음밥'
      },
      {
        id: 1,
        name: '스팸'
      },
      {
        id: 2,
        name: '닭가슴살'
      }
    ]
  },
  {
    time: {
      hour: 12,
      minute: 0,
      second: 0,
      nano: 0
    },
    mealType: 'LUNCH',
    imageUri: 'string',
    foods: [
      {
        id: 1,
        name: '간장계란볶음밥'
      },
      {
        id: 2,
        name: '스팸'
      }
    ]
  },
  {
    time: {
      hour: 18,
      minute: 0,
      second: 0,
      nano: 0
    },
    mealType: 'DINNER',
    imageUri: 'string',
    foods: [
      {
        id: 1,
        name: '간장계란볶음밥'
      },
      {
        id: 3,
        name: '닭가슴살'
      }
    ]
  }
]
const MainLeftTemplate = () => {
  const [breakfast, setBreakfast] = useState(false)
  const [lunch, setLunch] = useState(false)
  const [dinner, setDinner] = useState(false)
  const [elseMeal, setElseMeal] = useState(false)

  useEffect(() => {
    mealRecord.forEach(meal => {
      switch (meal.mealType) {
        case 'BREAKFAST':
          setBreakfast(true)
          break
        case 'LUNCH':
          setLunch(true)
          break
        case 'DINNER':
          setDinner(true)
          break
        default:
          setElseMeal(true)
          break
      }
    })
  }, [mealRecord])

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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading data</div>
  }

  const maintainMeal = todaymeal?.response?.maintainMeal
  const targetMeal = todaymeal?.response?.targetMeal

  // Ensure maintainMeal.calorie is a valid number
  const calorie = maintainMeal?.calorie
    ? parseInt(maintainMeal.calorie, 10)
    : null

  const targetcalorie = targetMeal?.calorie
    ? parseInt(targetMeal.calorie, 10)
    : null

  return (
    <HalfContainer>
      <Textdiv>
        <Text size="1.4rem">{formattedDate}</Text>
        <Text size="2rem">오늘</Text>
      </Textdiv>
      <Guagediv>
        <Emptydiv></Emptydiv>
        {calorie !== null && targetcalorie !== null ? (
          <LiquidGaugeWidget
            value={calorie}
            target={targetcalorie}
            color="#4fbafe"
            title="Revenue"
          />
        ) : (
          <div>Loading gauge...</div>
        )}
        <Checkboxdiv>
          등록현황
          <Checkbox
            text="아침"
            checked={breakfast}
          />
          <Checkbox
            text="점심"
            checked={lunch}
          />
          <Checkbox
            text="저녁"
            checked={dinner}
          />
        </Checkboxdiv>
      </Guagediv>
      <ProgressContainer>
        <NutProgress
          nuturition="탄수화물"
          intake={maintainMeal?.carbohydrate}
          required={maintainMeal?.carbohydrate}
        />
        <NutProgress
          nuturition="단백질"
          intake={maintainMeal?.protein}
          required={maintainMeal?.protein}
        />
        <NutProgress
          nuturition="지방"
          intake={maintainMeal?.fat}
          required={maintainMeal?.fat}
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
