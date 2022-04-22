//TYPES
import {ArticlesType} from '../services/types/types'

export function  Articles ({title, text, vehicles, img}: ArticlesType) {

  return(
    <article className='c-article'>
      <div className='c-article__message'>
        <h2 className='c-article__message__title'>{title}</h2>
        <p className='c-article__message__text'>{text}</p>
      </div>

      <span className='c-article__vehicles'>{vehicles}</span>

      <img className='c-article__image' src={img} />
    </article>
  )
}