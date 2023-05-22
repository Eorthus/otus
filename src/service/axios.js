import axios from 'axios'

const axiosApiInstance = axios.create()

const makeRequest = (method, url, payload, opts = {}) => {
    return axiosApiInstance({
      url,
      method,
      // cancelToken,
      params: method === 'get' ? payload : undefined,
      data: method !== 'get' ? payload : undefined,
      ...opts,
    })
  }

  // export const { get: GET, post: POST, patch: PATCH, delete: DELETE } = axiosApiInstance
export const GET = (url, payload, opts = {}) => makeRequest('get', url, payload, opts)
export const POST = (url, payload, opts = {}) => makeRequest('post', url, payload, opts)
export const DELETE = (url, payload, opts = {}) => makeRequest('delete', url, payload, opts)
export const PATCH = (url, payload, opts = {}) => makeRequest('patch', url, payload, opts)
export const PUT = (url, payload, opts = {}) => makeRequest('put', url, payload, opts)