//LIBRARIES
import {useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
//REACT COMPONENTS
import {Header} from '../components/Header'
import {Articles} from '../components/Articles'
//STYLED COMPONENTS
import { StyledLink } from '../styled_components/StyledComponents'
//ICONS
import '../assets/fonts/style.css'
//IMAGES
import list_myself_img from '../assets/images/myself-car.png'
import list_car_img from '../assets/images/list-car.png'
import list_employees_img from '../assets/images/list-employees.png'
//CONTEXT
import { AuthContext } from '../contexts/AuthContext'



export function  Home () {
  //CONTEXT
  const {user} = useContext(AuthContext)
  //NAVIGATE
  const navigate = useNavigate()

  //VERIFING IF THE USER IS LOGED
  useEffect(()=>{
  
    if(!user?.user.name){
      navigate('/')
    }

  },[user?.user.name])



  return(
    <div className="l-home">
      {/* ========= HEADER ========= */}
      <Header isPageHome={true}/>        
      {/* ========= MAIN ========= */}
      <main className='l-home__main'>

        <div className='l-home__main__welcome'>
          <h1 className='l-home__main__welcome__title'>Bem-vindo, {user?.user.name}</h1>
          <p className='l-home__main__welcome__text'>Menu</p>
        </div>

        <StyledLink to='/user/cars'>
          <Articles 
          title="Veículos reservados e vendidos"
          text="Veículos reservados e vendidos por você"
          vehicles= {`${user?.totalVehiclesLoggedUser} VEÍCULOS`}
          img={list_myself_img}
          />
        </StyledLink>        
        
        <StyledLink to='/user/all/cars'>
          <Articles 
            title="Listagem geral de veículos"
            text="Listagem de veículos de toda a empresa"
            vehicles={`${user?.totalVehicles} VEÍCULOS`}
            img={list_car_img}
          />
        </StyledLink>
        
        <StyledLink to='/user/all/employees'>
          <Articles 
            title="Funcionários da empresa"
            text="Listagem de todos os funcionários da empresa"
            vehicles={`${user?.totalEmployees} FUNCIONÁRIOS`}
            img={list_employees_img}
          />
        </StyledLink>        

      </main>

    </div>
  )

    
}