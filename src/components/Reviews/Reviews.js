import React from 'react'
import './Reviews.scss'

import Review from '../Review/Review'

/**
 * Component for render the reviews List
 */
export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [], reviewLimit: 20, reviewAll: false, reviewAllText: 'Ver todas', reviewLessText: 'Ver menos' };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Toggle the state of reviewAll
   * @param {event} event from the link click
   */
  handleClick(event) {
    event.preventDefault()
    this.setState({ reviewAll: !this.state.reviewAll });
  }

  /**
   * Get the data from de fake API server
   */
  componentDidMount() {
    fetch("http://localhost:3000") // I know it won't work on other enviroments, its just a fake API
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            reviews: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="reviews">
        <div className="reviews__title">
          <h4 className="title--h2">Más experiencias</h4>
          <a href="" className="reviews__title--link" onClick={this.handleClick}>{(this.state.reviewAll) ? this.state.reviewLessText : this.state.reviewAllText}</a>
        </div>
        {this.state.reviews.filter(review => (this.state.reviewAll || review.comments > this.state.reviewLimit)).map(review =>
          <Review key={review.id} image={review.image} title={review.text} user={`${review.owner.firstName} ${review.owner.lastName}`} comments={review.comments} />
        )}
      </div>
    )
  }
}
