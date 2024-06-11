import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { getMonthAchieve } from '../../services/calendar'; // 수정된 API 함수 가져오기

const MonthlyAnalysis = ({ Month, onDataReceived }) => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(`Current date: ${Month}`);
  }, [Month]);

  const today = format(Month, 'yyyy-MM-dd'); // 현재 날짜를 API 요청에 맞는 형식으로 변환합니다.

  const { data, error, isLoading } = useQuery({
    queryKey: ['monthAchieve', today], // 날짜를 쿼리 키에 추가
    queryFn: () => getMonthAchieve(today), // 날짜를 인자로 넘겨줌
  });

  useEffect(() => {
    if (data) {
      onDataReceived(data); // 데이터가 받아지면 상위 컴포넌트로 데이터를 전달합니다.
    }
  }, [data, onDataReceived]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    null
  );
};

export default MonthlyAnalysis;
