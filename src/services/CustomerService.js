import http from '../http-common'

const customerApi = {
  getAllCustomers: () => {
    return http.get('/api/customers/')
  },
}

const CustomerService = (() => {
  let customerInstance

  function createInstance() {
    return customerApi
  }

  if (!customerInstance) {
    customerInstance = createInstance()
  }

  return customerInstance
})()

export default CustomerService
