//LIBRARIES
import { error } from 'console'
import React, { useState } from 'react'
//SERVICES (API)
import {userLogIn} from '../services/api/AutoLuby'
//TYPES
import {AuthPropsType, AuthType, ResponseUserAPIType} from '../services/types/types'


//CONTEXTS
export const AuthContext = React.createContext({} as AuthType)

//FUNCTION
export function AuthContextFunction({ children }: AuthPropsType) {
  //STATE HOOKS
  const [user, setUser] = useState<ResponseUserAPIType>()

  //LOG IN FUNCTION
  async function authLogIn(email:string | undefined , password:string | undefined ) {
    const response = await userLogIn(email, password)
    setUser(response.data)  
  }

  //LOG OUT FUNCTION
  async function authLogOut() {
    setUser({
        token: undefined,
        totalVehiclesLoggedUser: undefined,
        totalVehicles: undefined,
        totalEmployees: undefined,
        user: {
          name: undefined,
          mail: undefined,
          cpf: undefined,
          vehicles: [
            {
              brand: undefined,
              model: undefined,
              yer:undefined,
              km:undefined,
              color:undefined,
              status:'',
              chassi:undefined,
              value:undefined,
            }
          ]          
        }
    })
  }

  return <AuthContext.Provider value={{authLogIn, authLogOut, user}}>{children}</AuthContext.Provider>
}


