//LIBRARIES
import React, { useState } from 'react'
//SERVICES (API)
import {FindAllVehicles} from '../services/api/AutoLuby'
//TYPES
import {AuthPropsType, VehicleContextType, ResponseVehiclesAPIType} from '../services/types/types'


//CREATING A NEW CONTEXTS
export const VehicleContext = React.createContext({} as VehicleContextType)

//CONTEXT FUNCTION
export function VehicleContextFunction({ children }: AuthPropsType) {
  //HOOK STATE
  const [listVehicles, setListVehicles] = useState<ResponseVehiclesAPIType>()

  //FIND VEHICLES FUNCTION
  async function FindAllVehiclesContext(token: string | undefined) {
    const response = await FindAllVehicles(token)
    setListVehicles(response.data)
  }

  return <VehicleContext.Provider value={{FindAllVehiclesContext, listVehicles}}>{children}</VehicleContext.Provider>
}


