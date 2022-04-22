//TYPES
import { EmployeesType } from '../services/types/types'


export function NewRowTableEmp (props: EmployeesType) {
  return(
    <tr className='c-worksheet-employees__main__table__body__row'>
      <td className='c-worksheet-employees__main__table__body__column'>{props.name}</td>
      <td className='c-worksheet-employees__main__table__body__column'>{props.email}</td>
      <td className='c-worksheet-employees__main__table__body__column'>{props.cpf}</td>
      <td className='c-worksheet-employees__main__table__body__column'>{props.salary}</td>
      <td className='c-worksheet-employees__main__table__body__column'>{props.bio}</td>
    </tr>
  )
   
}