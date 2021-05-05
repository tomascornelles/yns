import React from 'react'
import './Rating.scss'

/**
 * A component for display ratings with stars
 */
export default class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stars = []
    for (let index = 1; index <= 5; index++) {
      stars.push(index)
    }
    console.log(stars)
    return (
      <div className="rating">
        <p className="rating__title">Valoración:</p>
        <div className="rating__starts">
          {stars.map(star => (star <= this.props.value) ? <em key={star.toString()} className="rating__star icon-et-recommendations_star_fill"></em> : <em key={star.toString()} className="rating__star icon-et-recommendations_star"></em>)}
        </div>
      </div>
    )
  }
}
