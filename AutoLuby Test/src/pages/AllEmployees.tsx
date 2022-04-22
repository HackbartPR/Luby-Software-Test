//LIBRARIES
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
//REACT COMPONENTS
import { Header } from "../components/Header"
import { NewRowTableEmp } from "../components/NewRowTableEmp"
import { WorksheetEmployees } from '../components/WorksheetEmployee'
//CONTEXTS
import { AuthContext } from "../contexts/AuthContext"
import { EmployeeContext } from "../contexts/EmployeesContext"

export function AllEmployees () {
  const {user} = useContext(AuthContext)
  const {FindAllEmployeesContext, listEmployees} = useContext(EmployeeContext)

  const navigate = useNavigate()

  useEffect(()=>{

    if(!user?.user.name){
      navigate('/')
    }

    FindAllEmployeesContext(user?.token)

  },[user?.user.name, user?.token])

  return(
    <div className="l-all-employees">
      <Header isPageHome={false}/>

      <main className="l-all-employees__main">
        <span className="l-all-employees__main__title">Funcionários</span>
        
        <WorksheetEmployees index={listEmployees?.currentPage}>

          {listEmployees?.employees.map(employee => {
            return (
              <NewRowTableEmp 
                name={employee.name}
                email={employee.email}
                cpf={employee.cpf}
                salary={employee.salary}
                bio={employee.bio}
              />
            )
          })}

        </WorksheetEmployees>

      </main>
      
    </div>
  )
}