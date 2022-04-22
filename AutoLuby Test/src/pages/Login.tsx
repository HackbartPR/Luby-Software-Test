//LIBRARIES
import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
//STYLED COMPONENTS
import {StyledLogoSVG} from '../styled_components/StyledComponents'
//STYLES
import '../layouts/style.css'
//IMAGES
import image_home from '../assets/images/home-image.png'
//CONTEXT
import { AuthContext } from '../contexts/AuthContext'
//MODELS
import { emailSchema, passwordSchema } from '../models/inputModel'
import { text } from 'stream/consumers'




export function Login () {
  //NAVIGATE
  const navigate = useNavigate()
  //CONTEXT
  const {user, authLogIn} = useContext(AuthContext)
  //STATES
  const [emailInput, setEmailInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  //VALIDATION STATES //UNDEFINED MEANS THE USERS HAS NOT SUBMITTED THE FOR YET
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>(undefined) 
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>(undefined) 

  //VERIFING IF THE USER IS LOGED
  useEffect(()=>{
  
    if(!user?.user.name){return}
    
    navigate('/user/home')

  },[user?.user.name])

  //LOGGING
  async function handleSubmitLogIn (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if(!user?.user.name){

      const isValid = await inputsVerifincation()

      if(isValid){authLogIn(emailInput, passwordInput)}

    }
  }
  
  //YUP VERIFICATION
  async function inputsVerifincation () {
    let validCount = 0

    //VERIFIES THE EMAIL INPUT VALUE
    setIsEmailValid(await emailSchema.validate({email: emailInput})
        .then(() => { validCount++ ;return true})
        .catch(erro => {  setEmailInput(erro.message); return false }) 
    )
    //VERIFIES THE PASSWORD INPUT VALUE
    setIsPasswordValid( await passwordSchema.validate({password: passwordInput})
      .then(() =>{ validCount++ ;return true })
      .catch(erro => {  setPasswordInput(erro.message); return false }) 
    )

    return validCount === 2 ? true : false    
  }

  //IT VERIFIES IF THE USER HAS CLICKED ON THE INPUT, IN THE OTHER WORDS, THE USER WILL WRITES SOMETHING
  //START'S VALUE OF THE INPUT IS UNDEFINED, IT MEANS, OR THE USER HAS NOT SENT THE EMAIL YET OR IT IS CHANGING THE VALUE
  function handleSetUpEmailInput() {
    if(isEmailValid === false && isEmailValid !== undefined ){
      setEmailInput('')
      setIsEmailValid(undefined)
    }
  }

  //IT VERIFIES IF THE USER HAS CLICKED ON THE INPUT, IN THE OTHER WORDS, THE USER WILL WRITES SOMETHING
  //START'S VALUE OF THE INPUT IS UNDEFINED, IT MEANS, OR THE USER HAS NOT SENT THE PASSWORD YET OR IT IS CHANGING THE VALUE
  function handleSetUpPasswordInput() {
    if(isPasswordValid === false && isPasswordValid !== undefined ){
      setPasswordInput('')
      setIsPasswordValid(undefined)
    }
  }


  return(
    <div className="l-login">
      {/* ========= LOGIN SECTION ========= */}
      <section className="c-login">

        <div className="c-login__brand">
          <StyledLogoSVG />
          <span className="c-login__brand__name">AutoLuby</span>
        </div>

        <div className='c-login__container'>

          <div className="c-login__welcome">
            <h1 className='c-login__welcome__title'>Bem-vindo à AutoLuby</h1>
            <p className='c-login__welcome__text'>Faça o login para acesssar sua conta.</p>
          </div>

          <form className='c-login__form' onSubmit={handleSubmitLogIn}>
            <label className='c-login__form__label-mail'>
              Endereço de email

              {/* THIS BLOCK OF FUNCTION VERIFIES IF THE VALIDATION OF EMAIL TO ADD OR NOT VALID OR INVALID CLASS (WILL CHANGE THE BACKGROUND-COLOR) AND VERIFIES TOO IF THE USER HAS CHANGED
              EMAIL INPUT */}
              <input className={`c-login__form__label-mail__input ${isEmailValid === undefined ? '' : (isEmailValid === true ? 'valid' : 'invalid')}`} type="text" placeholder='@mail.com' 
              value={emailInput} onClick={handleSetUpEmailInput}
              /* VERIFING IF THE USER CHANGES DE EMAIL INPUT, IF SO, THE COLOR CHANGES */
              onChange={(event) => {
                setEmailInput(event.target.value)
                if(event.target.value.length !== emailInput.length){
                  setIsEmailValid(undefined)
                }
              }} />
            </label>

            <label className='c-login__form__label-password'>
              Senha
              
              {/* THIS BLOCK OF FUNCTION VERIFIES IF THE VALIDATION OF PASSWORD TO ADD OR NOT VALID OR INVALID CLASS (WILL CHANGE THE BACKGROUND-COLOR) AND VERIFIES TOO IF THE USER HAS CHANGED
              PASSWORD INPUT */}
              <input className={`c-login__form__label-password__input ${isPasswordValid === undefined ? '' : (isPasswordValid === false && 'invalid')}`} placeholder='senha' 
              type={`${isPasswordValid === undefined || isPasswordValid === true ? 'password' : 'text'}`} 
              value={passwordInput} onClick={handleSetUpPasswordInput}
              /* VERIFING IF THE USER CHANGES DE PASSWORD INPUT, IF SO, THE COLOR CHANGES */
              onChange={(event) => {
                setPasswordInput(event.target.value)
                if(event.target.value.length !== passwordInput.length){
                  setIsPasswordValid(undefined)
                }
              }} />
            </label>

            <div className='c-login__form__password-options'>
              <label className='c-login__form__password-options__label-check'>
                <input className='c-login__form__password-options__label-check__input' type='checkbox'/>
                Lembrar minha senha
              </label>

              <span className='c-login__form__password-options__span-forgot'> Esqueceu a senha?</span>
            </div>

            <button className='c-login__form__button'>Entrar</button>
          </form>

          <span className='c-login__create-account'>
            Ainda não tem conta?
            <a className='c-login__create-account__link' href='#'> Criar Conta</a>
          </span>

        </div>
      </section>  

      {/* ========= IMAGE SECTION ========= */}
      <section className='c-image-home'>
        <img className='c-image-home__img' src={image_home} />
      </section>    

    </div>    
  )
}