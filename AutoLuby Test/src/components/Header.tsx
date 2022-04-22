//LIBRARIES
import { useContext } from 'react'
//STYLED COMPONENTS
import {StyledLogoSVG, StyledLinkHeader} from '../styled_components/StyledComponents'
//ICONS
import '../assets/fonts/style.css'
//CONTEXT
import { AuthContext } from '../contexts/AuthContext'
//TYPES
import {HeaderPropsType} from '../services/types/types'


export function  Header ({isPageHome}:HeaderPropsType) {
  //CONTEXT
  const {authLogOut} = useContext(AuthContext)

  //FUNCTION TO LOGOUT
  function handleSubmitLogOut () {
    authLogOut()
  }

  return(
    <header className="c-header">
      <div className="c-header__brand">
        <StyledLinkHeader to='/user/home'>
          <StyledLogoSVG />
          <span className="c-header__brand__name">AutoLuby</span>
        </StyledLinkHeader>        
      </div>

      {isPageHome && (
        <form className={`c-header__form ${isPageHome && 'isPageHome'}`}>
          <input className='c-header__form__input' type='type'/>
          <i className='c-header__form__icon icon-search' />
        </form>
      )}
      

      <button className='c-header__button' type='button' onClick={handleSubmitLogOut}>
        Sair
        <i className='c-header__button__icon icon-log-out' />
      </button>
    </header>
)
}