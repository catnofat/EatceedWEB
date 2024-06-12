import styled from 'styled-components'
import DietGroup from '../molecules/DietGroup'
const HalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  heigh: 90vh;
  flex: 1;
  width: 80vh;
`

const CalendarDetail = () => {
  const mealrecord = [
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

  return (
    <HalfContainer>
      {mealrecord.map((meal, index) => (
        <DietGroup
          key={index}
          mealtype={meal?.mealType}
          imguri={meal?.imageUri}
          menus={meal?.foods}
          time={meal?.time}></DietGroup>
      ))}
    </HalfContainer>
  )
}

export default CalendarDetail
