import parsePhoneNumber from 'libphonenumber-js'

export const requiredRule = (value: any) => {
  return !value ? 'This field is required' : true
}

export const wordRule = (value:any)=>{
 
  return (
    ( /^[a-zA-Z]+$/.test(value)) ||
    'Invalid word'
  )
}

export const telRule = (value:any) =>{
  return (
    ((String(value).length > 9 || String(value).length < 17) && parsePhoneNumber(String(value), 'RU')?.isValid()) ||
    'Invalid phone number'
  )
}

export const emailRule = (value:any) => {
  if (!value) {
    return true
  }

  return (
    (/\S+@\S+\.\S+/.test(value)) ||
    'Invalid email'
  )
}

export const moneyRule = (value:any)=>{
  if ([null, undefined].includes(value)) {
    return 'Должно быть валидно'
  }
  if (+String(value).replace(/\s+/g, '') >= 0) {
    return true
  }

  return 'Invalid number'
}

export const agreementRule = (value: any) => {
  return !value ? 'Check consent' : true
}
