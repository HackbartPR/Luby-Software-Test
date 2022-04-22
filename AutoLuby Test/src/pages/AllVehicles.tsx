//LIBRARIES
import { useContext, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
//REACT COMPONENTS
import { Header } from "../components/Header"
import { Worksheet } from "../components/Worksheet"
import { NewRowTable } from "../components/NewRowTable"
//CONTEXTS
import { AuthContext } from "../contexts/AuthContext"
import { VehicleContext } from "../contexts/VehicleContext"


export function AllVehicles () {
  const {user} = useContext(AuthContext)
  const {listVehicles, FindAllVehiclesContext} = useContext(VehicleContext)

  const navigate = useNavigate()

  useEffect(()=>{

    if(!user?.user.name){
      navigate('/')
    }

    FindAllVehiclesContext(user?.token)    

  }, [!user?.user.name, user?.token])

  
  return(
    <div className="l-all-vehicles">
      <Header isPageHome={false}/>

      <main className="l-all-vehicles__main">
        <span className="l-all-vehicles__main__title">Todos Veículos</span>
        <Worksheet index={listVehicles?.currentPage}>

          {listVehicles?.vehicles.map(vehicle =>{
            return (
              <NewRowTable 
                brand={vehicle.brand} 
                model={vehicle.model} 
                yer={vehicle.yer} 
                km={vehicle.km} 
                color={vehicle.color} 
                chassi={vehicle.chassi} 
                value={vehicle.value} 
                status={vehicle.status}/>)}
          )}

        </Worksheet>  
      </main>
      
    </div>
  )
}

