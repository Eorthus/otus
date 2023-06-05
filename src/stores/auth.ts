import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { RegistrationType, AuthType } from '@/types/auth'
import { useRouter } from 'vue-router'
import { routeNames } from '@/router/routeNames'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  const authUserData = reactive<RegistrationType>({
    name: '',
    surname: '',
    login: '',
    password: '',
    address: '',
    phone: '',
    agreement: false
  })

  const users = ref<Array<RegistrationType>>([])

  const userState = useStorage('user-data', authUserData, sessionStorage)

  const usersState = useStorage('users-data', users, sessionStorage)

  const signUp = (user: RegistrationType) => {
    usersState.value.push(user)
    userState.value = user
    router.push({ name: routeNames.main })
  }

  const signIn = (user: AuthType) => {
    userState.value = usersState.value.find(
      (el) => el.login === user.login && el.password === user.password
    )
    if (!userState.value?.login.length) {
      return 'Invalid user'
    }
    router.push({ name: routeNames.main })
  }

  const signOut = () => {
    userState.value = authUserData
    router.push({ name: routeNames.login })
  }

  return { userState, signUp, signIn, signOut }
})
