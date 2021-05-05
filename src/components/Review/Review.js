import React from 'react'
import './Review.scss'

/**
 * Componet for render a reviews item
 */
export default class Review extends React.Component {
  render() {
    return (
      <div className="review__item">
        <div className="review__data">
          <div className="review__image"><img style={{ backgroundImage: `url(${this.props.image})` }} /></div>
          <div>
            <p className="review__text">{this.props.title}</p>
            <p className="review__user">{this.props.user}</p>
          </div>
        </div>
        <div className="review__comments">
          <p>
            {this.props.comments} {(this.props.comments === 1) ? 'comentario' : 'comentarios'}
          </p>
          <a href="">Leer más &gt;</a>
        </div>
      </div>
    )
  }
}
