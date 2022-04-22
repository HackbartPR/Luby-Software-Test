//LIBRARIES
import React, { useState } from 'react'
//SERVICES (API)
import {FindAllEmployees} from '../services/api/AutoLuby'
//TYPES
import {AuthPropsType, EmployeesContextType, ResponseEmployeesAPIType} from '../services/types/types'

//CREATING A NEW CONTEXTS
export const EmployeeContext = React.createContext({} as EmployeesContextType)

//CONTEXT FUNCTION
export function EmployeeContextFunction({ children }: AuthPropsType) {
    //HOOK STATE
    const [listEmployees, setListEmployees] = useState<ResponseEmployeesAPIType>()
  
    //FIND VEHICLES FUNCTION
    async function FindAllEmployeesContext(token: string | undefined) {
      const response = await FindAllEmployees(token)
      setListEmployees(response.data)
    }
  
    return <EmployeeContext.Provider value={{FindAllEmployeesContext, listEmployees}}>{children}</EmployeeContext.Provider>
  }

