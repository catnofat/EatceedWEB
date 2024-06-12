import './MyCalendar.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import moment from 'moment';
import { format } from 'date-fns';
import { StyledDot } from '../atoms/StyleDot';
import {getMonthAchieve} from'../../services/calendar';
import { useQuery } from '@tanstack/react-query';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import MonthlyAnalysis from '../atoms/MonthlyAnalysis';

const MyCalendar = (props) => {

    const CalendarContainer = styled.div`
    overflow-y: scroll;
    width: 300px;
    margin: 0 auto;
    padding: 10px;
    flex: 1;
    border-left: 0.2rem solid #ebebeb;
`


    const [date, setDate] = useState(new Date());

    function onClickHandler(date) {
      props.setDate(date);
    }

    const handleMonthChange = (newMonth) => {
      setDate(newMonth);
    };
//
    const today = format(date, 'yyyy-MM-dd'); // 현재 날짜를 API 요청에 맞는 형식으로 변환합니다.

    const { data, error, isLoading } = useQuery({
      queryKey: ['monthAchieve', today], // 날짜를 쿼리 키에 추가
      queryFn: async () => getMonthAchieve(today), // 날짜를 인자로 넘겨줌
    });

    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error loading data</div>;
    }

    /*if (data && data.response && data.response.getAnalyses && data.response.getAnalyses.length > 0) {
      // 데이터가 존재하고 배열이 비어있지 않은 경우
      isVisited = data.response.getAnalyses.map(item => item.isVisited); // 방문 여부 값을 배열로 변환
    }*/

    const isVisited = data?.response?.getAnalyses || [];
//

    //const [receivedData, setReceivedData] = useState(null); // 받은 데이터를 저장할 상태

    /*const isVisited = data?.response?.getAnalyses?.isVisited !== undefined
    ? String(data?.response?.getAnalyses?.isVisited)
    : null;*/

    const isCarlorieAchieved = data?.response?.getAnalyses?.isCarlorieAchieved !== undefined
    ? String(data?.response?.getAnalyses?.isCarlorieAchieved)
    : null;

    /*const handleDataReceived = (data) => {
      setReceivedData(data); // 받은 데이터를 상태에 저장합니다.
      const isVisited = receivedData?.response?.getAnalyses?.isVisited

    const isCarlorieAchieved = receivedData?.response?.getAnalyses?.isCarlorieAchieved
    };*/

    /*const tileClassName = ({ date, view }) => {
      const formattedDate = moment(date).format("YYYY-MM-DD");
      const isCarlorieAchievedArray = isCarlorieAchieved.some(item => item.date === formattedDate && item.isCarlorieAchieved);
      if (view === 'month' && !isCarlorieAchievedArray) {
        return (
          <div id='highlight'>
            {date.getDate()}
          </div>
        );
    };
    return null;
  }*/

/*<MonthlyAnalysis Month={date} onDataReceived={handleDataReceived} />
                {receivedData && (
                  <div>
                    <pre>{JSON.stringify(receivedData, null, 2)}</pre>
                    <pre>{console.log(receivedData)}</pre>
                    <pre>{console.log(isVisited)}</pre>
                    <pre>{console.log(isCarlorieAchieved)}</pre>
                  </div>
                )}*/
    return(
        <CalendarContainer>
            <p id='Year'> 2024 </p>
            <p id='Text'>눌러서 이달의 목표를 확인해보세요</p>
            <div>
            <pre>{console.log(data)}</pre>
                    <pre>{console.log(isVisited)}</pre>
                    <pre>{console.log(isCarlorieAchieved)}</pre>
                  </div>
            <Calendar
                onChange={setDate}
                value={date}
                locale="en-US"
                next2Label={null}
                nextLabel={null}
                prev2Label={null}
                prevLabel={null}
                minDetail="year"
                tileClassName={({ date, view }) => {
                  const formattedDate = moment(date).format("YYYY-MM-DD");
                  const isCalorieAchievedFalse = isVisited.some(item => item.date === formattedDate && !item.isCalorieAchieved);

                  if (isCalorieAchievedFalse) {
                      return 'calorie-not-achieved'; // 클래스 이름을 추가합니다.
                  }
                  return null;
              }}
                onClickDay={onClickHandler}
                onClickMonth={handleMonthChange}
                tileContent={({ date, view }) => {
                    let html = [];
                    const formattedDate = moment(date).format("YYYY-MM-DD");
                    const isVisitedArray = isVisited.some(item => item.date === formattedDate && item.isVisited);
                    const isCalorieAchieved = isVisited.some(item => item.date === formattedDate && item.isCalorieAchieved);

                    if (
                      isVisitedArray
                    ) {
                      html.push(<StyledDot key={formattedDate}/>);
                    }


                    return <>{html}</>;
                  }}
                formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                showNeighboringMonth={false}
            />
        </CalendarContainer>
    )
}

export default MyCalendar