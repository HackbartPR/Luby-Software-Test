//ICONS
import '../assets/fonts/style.css'
//LIBRARIES
import {PropsWithChildren } from 'react'
//TYPES
import { WorksheetPropsType } from '../services/types/types'


export const Worksheet: React.FC<PropsWithChildren<WorksheetPropsType>> =  ({children, index}) => {

  return(
    <div className="c-worksheet">

      <header className="c-worksheet__header">
        <h2 className="c-worksheet__header__title">Listagem de veículos reservados e vendidos</h2>

        <div className="c-worksheet__header__options">
          <nav className="c-worksheet__header__options__nav">
            <span className="c-worksheet__header__options__nav__before">
              <i className='c-worksheet__header__options__nav__before__icon icon-arrow-left' />
              Anterior              
            </span>
            
            <ul className="c-worksheet__header__options__nav__list">
              <li className={`c-worksheet__header__options__nav__list__item ${index == 1 && 'focus'}`}>1</li>
              <li className={`c-worksheet__header__options__nav__list__item ${index == 2 && 'focus'}`}>2</li>
              <li className={`c-worksheet__header__options__nav__list__item ${index == 3 && 'focus'}`}>3</li>
            </ul>
            
            <span className='c-worksheet__header__options__nav__after'>
              Próxima
              <i className='c-worksheet__header__options__nav__before__icon icon-arrow-right' />
            </span>
          </nav>

          <form className="c-worksheet__header__options__form">
            <input className="c-worksheet__header__options__form__input" type='text'/>
            <i className="c-worksheet__header__options__form__icon icon-search" />
          </form>
        </div>
      </header>

      <main className="c-worksheet__main">
        <table className='c-worksheet__main__table'>

          <thead className='c-worksheet__main__table__head'>
            <tr className='c-worksheet__main__table__head__row'>
              <th className='c-worksheet__main__table__head__column'>MARCA</th>
              <th className='c-worksheet__main__table__head__column'>MODELO</th>
              <th className='c-worksheet__main__table__head__column'>ANO</th>
              <th className='c-worksheet__main__table__head__column'>KM</th>
              <th className='c-worksheet__main__table__head__column'>COR</th>
              <th className='c-worksheet__main__table__head__column'>STATUS</th>
              <th className='c-worksheet__main__table__head__column'>CHASSIS</th>
              <th className='c-worksheet__main__table__head__column'>VALOR</th>
            </tr>
          </thead>

          <tbody className='c-worksheet__main__table__body'>            
            {children}
          </tbody>
          
        </table>
      </main>      

    </div>  
  )    
}

 