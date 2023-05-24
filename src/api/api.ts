export const apiGetJson = async () => {

    type ArrayItemsTypes = {
        category: string
        description: string
        id: number
        image: string
        price: number
        title: string
        rating: { count: number; rate: number }
      }

  const data: Promise<Array<ArrayItemsTypes>> = await fetch('https://fakestoreapi.com/products')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })

  return data
}
