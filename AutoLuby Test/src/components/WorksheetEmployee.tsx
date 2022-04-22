//ICONS
import '../assets/fonts/style.css'
//LIBRARIES
import {PropsWithChildren } from 'react'
//TYPES
import { WorksheetPropsType } from '../services/types/types'


export const WorksheetEmployees: React.FC<PropsWithChildren<WorksheetPropsType>> =  ({children, index}) => {

  return(
    <div className="c-worksheet-employees">

      <header className="c-worksheet-employees__header">
        <h2 className="c-worksheet-employees__header__title">Listagem de funcionários da empresa</h2>

        <div className="c-worksheet-employees__header__options">
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

      <main className="c-worksheet-employees__main">
        <table className='c-worksheet-employees__main__table'>

          <thead className='c-worksheet-employees__main__table__head'>
            <tr className='c-worksheet-employees__main__table__head__row'>
              <th className='c-worksheet-employees__main__table__head__column'>NOME</th>
              <th className='c-worksheet-employees__main__table__head__column'>EMAIL</th>
              <th className='c-worksheet-employees__main__table__head__column'>CPF</th>
              <th className='c-worksheet-employees__main__table__head__column'>VALOR</th>
              <th className='c-worksheet-employees__main__table__head__column'>BIO</th>
            </tr>
          </thead>

          <tbody className='c-worksheet-employees__main__table__body'>            
            {children}
          </tbody>
          
        </table>
      </main>      

    </div>  
  )    
}

 