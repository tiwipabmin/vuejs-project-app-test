import http from '../http-common'

const testApi = {
  test: () => {
    return http.get('/test')
  },
}

const TestServerService = (() => {
  let instance

  function createInstance() {
    return testApi
  }

  if (!instance) {
    instance = createInstance()
  }

  return instance
})()

export default TestServerService
