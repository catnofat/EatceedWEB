import { instance } from './index'

export const getMeal = () => {
  return instance.get('/v1/meal')
}

export const getDateMeal = date => {
  return instance.get(`/v1/meal/${date}`)
}

export const getFood = id => {
  return instance.get(`/v1/foods/${id}`)
}
