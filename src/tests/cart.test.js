import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import ProductCart from '@/components/cart/ProductCart.vue'
import { useCartStore } from '@/stores/cart'
import { useCatalogStore } from '@/stores/catalog'

describe('Cart', () => {
  const item = {
      category: 'Category Test',
      description: 'Comment Test',
      id: 1,
      image: 'test.jpg',
      price: 100,
      title: 'Test',
      rating: { count: 1, rate: 1 }
  }
  
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('Cart exist', async () => {
    const wrapper = mount(ProductCart)

    expect(wrapper.exists()).toBe(true)
  })

  it('Cart add function', async () => {
    const wrapper = mount(ProductCart)

    const { list } = storeToRefs(useCatalogStore())

    list.value = [item]

    const { addCartHandler } = useCartStore()
    const {cartItems, items} = storeToRefs(useCartStore())

    await addCartHandler(item.id)

    expect(cartItems.value).toStrictEqual([item.id])
    expect(items.value).toStrictEqual([item])
  })

  it('Cart items length', async () => {
    const wrapper = mount(ProductCart)

    const { list } = storeToRefs(useCatalogStore())

    list.value = [item]

    const { addCartHandler } = useCartStore()

    await addCartHandler(item.id)

    const length = wrapper.find('[data-test="count"]')

    expect(length.text()).toEqual('1')
  })

  it('Cart items sum', async () => {
    const wrapper = mount(ProductCart)

    const { list } = storeToRefs(useCatalogStore())

    list.value = [item]

    const { addCartHandler } = useCartStore()

    await addCartHandler(item.id)

    const price = wrapper.find('[data-test="price"]')

    expect(price.text()).toEqual(`${item.price} $`)
  })

})
