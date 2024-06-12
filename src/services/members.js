import { instance } from './index'

export const getWeight = () => {
  return instance.get('/v1/members/weight')
}
