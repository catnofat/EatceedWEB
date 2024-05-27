import styled from 'styled-components'
import samplefood from '../../assets/samplefood.png'

const Containerdiv = styled.div`
  width: 80%;
  diplay: flex;
  margin-top: 2.4rem;
`

const Textdiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
const Timetext = styled.div`
  display: flex;
`
const Kcaltext = styled.div`
  display: flex;
`
const BoldText = styled.div`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-family: pretendardBold;
`
const Text = styled.div`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-family: pretendard;
`

const Contentdiv = styled.div`
  display: flex;
  justify-content: space-between;
`
const Imgdiv = styled.div`
  border-color: transparent;
  width: 20rem;
  height: 20rem;
  background-image: url(${samplefood});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

const FoodMenu = styled.div`
  display: flex;
  flex-direction: column;
`

const DietGroup = ({ menus }) => {
  return (
    <Containerdiv>
      <Textdiv>
        <Timetext>
          <BoldText
            size="1.8rem"
            color="#ff8214">
            &bull;&nbsp;
          </BoldText>
          <BoldText size="1.8rem">아침&nbsp;</BoldText>
          <BoldText
            size="1.8rem"
            color="gray">
            07:00
          </BoldText>
        </Timetext>

        <Kcaltext>
          <Text size="1.8rem">324&nbsp;</Text>
          <Text
            size="1.8rem"
            color="#c4c4c4">
            kcal&nbsp;
          </Text>
        </Kcaltext>
      </Textdiv>
      <Contentdiv>
        <Imgdiv></Imgdiv>
        <FoodMenu>
          {menus.map((menu, index) => (
            <Text key={index}>{menu?.name}</Text>
          ))}
        </FoodMenu>
      </Contentdiv>
    </Containerdiv>
  )
}

export default DietGroup
