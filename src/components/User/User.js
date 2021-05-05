import React from 'react'
import './User.scss'

/**
 * Component tha renders the user card data
 */
export default class User extends React.Component {
  render() {
    const userType = (this.props.doctor) ? 'doctor' : 'author'
    return (
      <div className={`user ${userType}`}>
        <div><img src={this.props.image} alt="" className="user__image" /></div>
        <div>
          <h4 className="user__title">{this.props.title}</h4>
          <h5 className="user__subtitle">{this.props.subtitle}</h5>
        </div>
      </div>
    )
  }
}
