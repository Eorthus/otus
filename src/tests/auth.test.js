import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import SignInForm from '@/components/forms/SignInForm.vue'
import { useAuthStore } from '@/stores/auth'

describe('Auth', () => {
  const login = 'user123'
  const password = 'password123'

  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('SignIn exists', async () => {
    const wrapper = mount(SignInForm)

    expect(wrapper.exists()).toBe(true)
  })

  it('SignIn login correct', async () => {
    const wrapper = mount(SignInForm)

    const input = wrapper.find('[data-test="login"]')

    await input.setValue('user123')

    expect(input.element.value).toBe('user123')
  })

  it('SignIn password correct', async () => {
    const wrapper = mount(SignInForm)

    const input = wrapper.find('[data-test="password"]')

    await input.setValue('password123')

    expect(input.element.value).toBe('password123')
  })

  it('SignIn submit store unauthorized', async () => {
    const wrapper = mount(SignInForm)

    const { signIn } = useAuthStore()

    await signIn({ login, password })

    const { userState } = storeToRefs(useAuthStore())

    expect(userState.value).toBe(undefined)
  })
})
