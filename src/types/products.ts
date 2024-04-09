export type ArrayItemsTypes = {
  category: string
  description?: string
  id: number
  image?: string
  price: number
  title: string
  rating?: { count: number; rate: number }
}

export type ArrayItemsSendTypes = {
  category: string
  description?: string
  image?: string
  price: number
  title: string
}

export type FormAddItem = {
  id: number
  title: string
  price: number
  category: string
  description?: string
}

export type SendItem = {
    name: string
    surname: string
    phone: string
    email?: string
    address: string
    comment?: string
    agreement: boolean
}
