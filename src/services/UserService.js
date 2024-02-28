import http from '../http-common'

const userApi = {
  signIn: () => {
    return http.post('/api/user/sign-in')
  },
}

const UserService = (() => {
  let userInstance

  function createInstance() {
    return userApi
  }

  if (!userInstance) {
    userInstance = createInstance()
  }

  return userInstance
})()

export default UserService
