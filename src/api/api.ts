import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'query-string'
import storage from '../helper/storage'
import { authAction } from '../redux/auth'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      },
      paramsSerializer: params => queryString.stringify(params),
})

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
    try {
      const token = await storage.get('token')
      if(config.headers) token && (config.headers['Authorization'] = `Bearer ${token}`)
    } catch (error) {}
    return config
  })
  
  api.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      return response.data
    },
    err => {
      // if (err.response.status == 401) {
      //   const dispatch = useDispatch()
      //   dispatch(authActions.logout())
      //   throw 'Login session expired'
      // } else {
      // console.log(err.response)
      throw err.response.data.error
      // }
    }
  )
  
  export default api