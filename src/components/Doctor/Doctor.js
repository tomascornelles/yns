import React, { Children } from 'react'
import './Doctor.scss'
import doctorImg from '../../assets/images/doctor.png'

import User from '../User/User'
import Rating from '../Rating/Rating'

/**
 * Component that render doctor info
 */
export default class Doctor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 className="title--h3">Sobre el doctor</h2>
        <User doctor title={this.props.title} subtitle={this.props.subtitle} image={doctorImg} />
        <button className="button">Contactar al doctor</button>
        <Rating value={this.props.rating} />
        <p>
          {this.props.children}
        </p>
      </div>
    )
  }
}
