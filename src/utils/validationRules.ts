export const requiredRule = (value: any) => {
  return !value ? 'This field is required' : true
}
