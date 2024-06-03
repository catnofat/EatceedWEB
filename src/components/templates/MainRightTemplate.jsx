import styled from 'styled-components'
import DietGroup from '../molecules/DietGroup'
const HalfContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  heigh: 90vh;
  border-left: 0.2rem solid #ebebeb;
`

const MainRightTemplate = () => {
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

export default MainRightTemplate
