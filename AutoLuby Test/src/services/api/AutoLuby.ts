//LIBRARIES
import axios from 'axios'
//TYPES
import { ResponseUserAPIType, ResponseVehiclesAPIType, ResponseEmployeesAPIType } from '../types/types'

//USER LOGGING
export const userLogIn = async function (email: string | undefined, password: string | undefined) {
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

  axios.interceptors.response.use(
    async function (response) {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        alert('Usuario nao encontrado')
      }
      return error
    }
  )

  return await axios.post<ResponseUserAPIType>(`https://autoluby.k8s.luby.me/login`, JSON.stringify({ email: email, password: password }))
}

//LIST ALL THE CARS
export const FindAllVehicles = async function (token: string | undefined) {
  axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
  axios.defaults.headers.get['Accept'] = 'application/json'
  axios.defaults.headers.get['Authorization'] = 'Bearer ' + token

  return await axios.get<ResponseVehiclesAPIType>(`https://autoluby.k8s.luby.me/vehicles`)
}

//LIST ALL THE EMPLOYEES
export const FindAllEmployees = async function (token: string | undefined) {
  axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'
  axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
  axios.defaults.headers.get['Accept'] = 'application/json'
  axios.defaults.headers.get['Authorization'] = 'Bearer ' + token

  return await axios.get<ResponseEmployeesAPIType>(`https://autoluby.k8s.luby.me/employees`)
}
