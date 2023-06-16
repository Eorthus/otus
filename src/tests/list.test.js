import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import MainList from '@/components/main/MainList.vue'

describe('List', () => {
  const item = {
    category: 'Category Test',
    description: 'Comment Test',
    id: 1,
    image: 'test.jpg',
    price: 100,
    title: 'Test',
    rating: { count: 1, rate: 1 }
  }
  const mockRoute = {
    matched: [{ name: '' }, { name: 'main.list' }]
  }

  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('List exist', async () => {
    const wrapper = mount(MainList, {
      global: {
        mocks: {
          route: mockRoute
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })
})
