import { GET } from '@/service/axios.js'
export const apiGetJson = async () => {

  const { data } = await GET('https://fakestoreapi.com/products')

  return data
}
