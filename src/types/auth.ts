export type RegistrationType = {
  name: string
  surname: string
  login: string
  password: string
  address: string
  email?: string
  phone: string
  agreement: boolean
}

export type AuthType = {
  login: string
  password: string
}
