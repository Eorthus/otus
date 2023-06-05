import { GET, POST } from '@/service/axios.js'
import { SendItem, ArrayItemsSendTypes } from '@/types/products'

export const apiGetJson = async () => {
  const { data } = await GET('https://fakestoreapi.com/products')

  return data
}

export const apiPostOrderJson = async (form: SendItem, items: Array<number|undefined>|undefined) => {
  const { data } = await POST('https://httpbin.org/post', { items, form })

  return data
}

export const apiPostItemJson = async (form: ArrayItemsSendTypes) => {
  const { data } = await POST('https://httpbin.org/post', form)

  return data
}
