import { GET, POST } from '@/service/axios.js'
import { SendItem } from '@/types/products'

export const apiGetJson = async () => {

  const { data } = await GET('https://fakestoreapi.com/products')

  return data
}

export const apiPostJson = async (form:SendItem) => {

  const { data } = await POST('https://httpbin.org/post', form)

  return data
}
