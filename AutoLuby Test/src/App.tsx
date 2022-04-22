//LIBRARIES
import {Routes, Route} from 'react-router-dom'

//REACT COMPONENTS
import {Login} from './pages/Login'
import {Home} from './pages/Home'
import {MyVehicles} from './pages/MyVehicles'
import {AllVehicles} from './pages/AllVehicles'
import {AllEmployees} from './pages/AllEmployees'


//CONTEXT
import {AuthContextFunction} from './contexts/AuthContext'
import {VehicleContextFunction} from './contexts/VehicleContext'
import {EmployeeContextFunction} from './contexts/EmployeesContext'



function App() {
  return (
    <AuthContextFunction>
      <VehicleContextFunction>
        <EmployeeContextFunction>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/user/home' element={<Home />} />
            <Route path='/user/cars' element={<MyVehicles />} />
            <Route path='/user/all/cars' element={<AllVehicles />} />
            <Route path='/user/all/employees' element={<AllEmployees />} />
          </Routes> 
        </EmployeeContextFunction>             
      </VehicleContextFunction>
    </AuthContextFunction>
  );
}

export default App;
