//STYLED COMPONENTS 
import {StyledSheetStatus} from '../styled_components/StyledComponents'
//TYPES
import { VehicleType } from '../services/types/types'


export function NewRowTable (props: VehicleType) {

    return(
        <tr className='c-worksheet__main__table__body__row'>
              <td className='c-worksheet__main__table__body__column'>{props.brand}</td>
              <td className='c-worksheet__main__table__body__column'>{props.model}</td>
              <td className='c-worksheet__main__table__body__column'>{props.yer}</td>
              <td className='c-worksheet__main__table__body__column'>{props.km}</td>
              <td className='c-worksheet__main__table__body__column'>{props.color}</td>
              <td className='c-worksheet__main__table__body__column'>
                <StyledSheetStatus status={props?.status}>
                  {props.status}
                </StyledSheetStatus>                
              </td>
              <td className='c-worksheet__main__table__body__column'>{props.chassi}</td>
              <td className='c-worksheet__main__table__body__column'>R$ {props.value}</td>
        </tr>
    )
}