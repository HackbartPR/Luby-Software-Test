//LIBRARIES
import { useContext, useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
//REACT COMPONENTS
import { Header } from "../components/Header"
import { Worksheet } from "../components/Worksheet"
import { NewRowTable } from "../components/NewRowTable"
//CONTEXTS
import { AuthContext } from "../contexts/AuthContext"


export function MyVehicles () {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{

    if(!user?.user.name){
      navigate('/')
    }

  }, [user?.user.name])

  
  return(
    <div className="l-my-vehicles">
      <Header isPageHome={false}/>

      <main className="l-my-vehicles__main">
        <span className="l-my-vehicles__main__title">Seus Veículos</span>
        <Worksheet index={1}>

          {user?.user.vehicles?.map( function (vehicle, index){
            return ( 
              <NewRowTable 
                brand={vehicle.brand} 
                model={vehicle.model} 
                yer={vehicle.yer} 
                km={vehicle.km} 
                color={vehicle.color} 
                chassi={vehicle.chassi} 
                value={vehicle.value} 
                status={vehicle.status}
                key={index}/> 
            )
          })}

        </Worksheet>  
      </main>
      
    </div>
  )
}

