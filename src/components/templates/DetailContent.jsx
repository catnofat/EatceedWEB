import styled from "styled-components"
import CalendarDetail from "../molecules/CalendarDetail"

const Contaioner = styled.div`
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
heigh: 90vh;
font-family: pretendard;
`
const fontstyle = {
    fontSize: '25px',
    fonsFamily: 'pretendard',
};


const DetailContent = (props) =>{

    

    return(
        <Contaioner>
            <p style={fontstyle}>Selected Date: {props.date ? props.date.toLocaleDateString() : 'None'}</p>
            <CalendarDetail/>
        </Contaioner>
    )
}

export default DetailContent