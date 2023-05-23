export const requiredRule = (value: any) => {
  return !value ? 'This field is required' : true
}

export const agreementRule = (value: any) => {
  return !value ? 'Check consent' : true
}
