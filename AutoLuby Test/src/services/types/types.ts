import { ReactNode } from 'react'

// ==========  TYPES  ========== //
export type VehicleType = {
  brand: String | undefined
  model: string | undefined
  yer: number | undefined
  km: number | undefined
  color: string | undefined
  status: string
  chassi: string | undefined
  value: number | undefined
}

export type UserType = {
  name: string | undefined
  mail: string | undefined
  cpf: string | undefined
  vehicles: [VehicleType]
}

export interface ResponseUserAPIType {
  token: string | undefined
  totalVehiclesLoggedUser: number | undefined
  totalVehicles: number | undefined
  totalEmployees: number | undefined
  user: UserType
}

export interface ResponseVehiclesAPIType {
  perPage: number | undefined
  currentPage: number | undefined
  totalRecords: number | undefined
  vehicles: Array<VehicleType>
}

export interface ResponseEmployeesAPIType {
  perPage: number | undefined
  currentPage: number | undefined
  totalRecords: number | undefined
  employees: Array<EmployeesType>
}

export type EmployeesType = {
  name: string | undefined
  email: string | undefined
  cpf: string | undefined
  salary: number | undefined
  bio: string | undefined
}

export type AuthType = {
  authLogIn: (email: string | undefined, password: string | undefined) => void
  authLogOut: () => void
  user: ResponseUserAPIType | undefined
}

export type VehicleContextType = {
  FindAllVehiclesContext: (token: string | undefined) => void
  listVehicles: ResponseVehiclesAPIType | undefined
}

export type EmployeesContextType = {
  FindAllEmployeesContext: (token: string | undefined) => void
  listEmployees: ResponseEmployeesAPIType | undefined
}

export type AuthPropsType = {
  children: ReactNode
}

export type HeaderPropsType = {
  isPageHome: boolean
}

export type ArticlesType = {
  title: string
  text: string
  vehicles: string | undefined
  img: string
}

export type StyledStatusType = {
  status: string
}

export type WorksheetPropsType = {
  children: ReactNode
  index: number | undefined
}
