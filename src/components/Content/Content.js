import React from 'react'
import './Content.scss'

import User from '../User/User'
import Doctor from '../Doctor/Doctor'

import gallery1 from '../../assets/images/gallery1.png'
import gallery2 from '../../assets/images/gallery2.png'
import avatar4 from '../../assets/images/avatar4.png'

import iconWorthit from '../../assets/icons/worthit.svg'
import iconEuro from '../../assets/icons/euro.svg'

/**
 * Component that contains de center of the app, including gallery, experience form and user card
 */
export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <User title="vebris" subtitle="Barcelona (Ciudad) · 8 sep 2019" image={avatar4} />
        <h1 className="content__title title--h1">Muy orgullosa de mi nuevo abdomen</h1>
        <div className="content__info">
          <div><img src={iconWorthit} className="content__icon" /> Vale la pena</div>
          <div><img src={iconEuro} className="content__icon" /> Precio Aproximado: 8500€</div>
        </div>
        <article className="content__gallery">
          <img src={gallery2} alt="Gallery 2" className="content__image" />
          <img src={gallery1} alt="Gallery 1" className="content__image" />
          <img src={gallery2} alt="Gallery 2" className="content__image" />
          <img src={gallery1} alt="Gallery 1" className="content__image" />
          <img src={gallery2} alt="Gallery 2" className="content__image" />
          <img src={gallery1} alt="Gallery 1" className="content__image" />
        </article>
        <Doctor title="Dorsia Clínica Estética" subtitle="81 sedes en Madrid, Lleida, Tarragona…" rating="4">
          Es un excelente cirujano que se merece con creces la buena fama tiene, pero para estas cosas no hay que escatimar! El post operatorio ha sido un poco difícil. Aún no me adapto a caminar sin sentir molestia y opresión, pero supongo que es cuestión de tiempo.
        </Doctor>
      </div>
    )
  }
}
