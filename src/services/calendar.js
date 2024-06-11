import { instance } from './index'
import { format } from 'date-fns';

// 오늘의 데이터를 가져오는 함수
export const getMonthAchieve = async (month) => {
  const today = new Date(); // 현재 날짜를 가져옵니다.
  const formattedDate = format(month, 'yyyy-MM-dd'); // API에 맞는 형식으로 날짜를 변환합니다.
  try {
    const response = await instance.get(`/v1/achieve/${formattedDate}`); // 해당 날짜에 대한 데이터만 요청합니다.
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch today\'s data');
  }
}

/*export const getMonthAchieve = async () => {
  return instance.get(`v1/achieve/${date}`)
}*/

export const getMeal = () => {
  return instance.get('/v1/meal')
}

export const getDateMeal = date => {
    return instance.get(`/v1/meal/${date}`)
  }
  
export const getFood = id => {
    return instance.get(`/v1/foods/${id}`)
  }
  