import React from 'react'
import './Experience.scss'

import InputCount from '../InputCount/InputCount'

/**
 * Component that renders the form for new experiences, as well as the validator of its fields.
 */
export default class Experience extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Setting the estate
     */
    this.state = { treatment: false, recommend: '', title: false, description: false, submited: false, send: false };

    /**
     * Binding events
     */
    this.handleClick = this.handleClick.bind(this);
    this.getTreatment = this.getTreatment.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  /**
   * Set the recommend value to "Sí" or "No"
   * @param {event} event Initiator of the click
   */
  handleClick(event) {
    event.preventDefault()
    this.setState({ recommend: event.target.innerHTML })
  }

  /**
   * Set the state of treatment
   * @param {event} event Initiator of the change event
   */
  getTreatment(event) {
    this.setState({ treatment: (!!event.target.value) })
  }

  /**
   * Set the state of the title
   * @param {string} value value of the title input
   */
  getTitle(value) {
    this.setState({ title: (!!value) })
  }

  /**
   * Set the state of the description
   * @param {string} value value of the description input
   */
  getDescription(value) {
    this.setState({ description: (!!value) })
  }

  /**
   * Validate de whole form if all the fields are correct
   * @returns boolean
   */
  validateForm() {
    return !this.state.submited || ((this.state.treatment && this.state.recommend === 'No') || (this.state.treatment && this.state.title && this.state.description))
  }

  /**
   * Validates if treatment select is correct
   * @returns boolean
   */
  validateTreatment() {
    return !this.state.submited || (this.state.submited && this.state.treatment)
  }

  /**
   * Validates if recommend option is correct
   * @returns boolean
   */
  validateRecommend() {
    return !this.state.submited || (this.state.submited && this.state.recommend)
  }

  /**
   * Validates if title input is correct
   * @returns boolean
   */
  validateTitle() {
    return !this.state.submited || (this.state.submited && this.state.title)
  }

  /**
   * Validates if description textarea is correct
   * @returns boolean
   */
  validateDescription() {
    return !this.state.submited || (this.state.submited && this.state.description)
  }

  /**
   * Check if the form is valid before to send data
   * @param {event} event Form event
   */
  handleSubmit(event) {
    event.preventDefault()
    this.setState({ submited: true })
    if (this.state.submited && this.validateForm())
      this.setState({ send: true })
    else
      console.error('Errores de validación')
  }

  /**
   * Reset the state of the form for send a new experience
   * @param {event} event Click event
   */
  resetForm(event) {
    event.preventDefault()
    this.setState({ treatment: false, recommend: '', title: false, description: false, submited: false, send: false })
  }

  /**
   * Renders the whole form or thank you message
   * @returns element
   */
  render() {
    const step2 = (this.state.recommend === 'Sí')
      ? <div className="experience__step2">
        <p className="desktop">Titulo de tu experiencia</p>
        <div className={(this.validateTitle()) ? 'hidden' : 'error'}>Este campo es obligatorio</div>
        <InputCount placeholder="Título resumen de tu experiencia" min="20" max="90" getData={this.getTitle}></InputCount>
        <p className="desktop">¿Qué tratamiento te has realizado?</p>
        <div className={(this.validateDescription()) ? 'hidden' : 'error'}>Este campo es obligatorio</div>
        <InputCount type="textarea" placeholder="Cuéntanos todos los detalles, porqué decidiste hacerlo, cómo te sentiste antes y después del tratamiento, qué consejos darías a los que lo quieren realizar..." min="300" max="1800" getData={this.getDescription}></InputCount>
      </div>
      : ''
    return (
      (this.state.send)
        ?
        <div className="experience__thankyou">
          <p>Gracias por compartir tu experiencia</p>
          <p><a href="" onClick={this.resetForm}>Volver a opinar</a></p>
        </div>
        :
        <form className="experience" onSubmit={this.handleSubmit}>
          <div className="experience__step1">
            <h3 className="title--h2">Cuéntanos tu experiencia</h3>
            <fieldset>
              <p>¿Qué tratamiento te has realizado?</p>
              <div className={(this.validateTreatment()) ? 'hidden' : 'error'}>Este campo es obligatorio</div>
              <select name="" id="select" onChange={this.getTreatment}>
                <option value="" defaultValue>Selecciona el tratamiento</option>
                <option value="1">Aumento de senos</option>
              </select>
            </fieldset>
            <fieldset><p>¿Recomendarías el tratamiento?</p>
              <div className={(this.validateRecommend()) ? 'hidden' : 'error'}>Este campo es obligatorio</div>
              <button className={(this.state.recommend === 'Sí') ? "button button--round" : "button button--round button--disabled"} onClick={this.handleClick}>Sí</button>
              <button className={(this.state.recommend === 'No') ? "button button--round" : "button button--round button--disabled"} onClick={this.handleClick}>No</button>
            </fieldset>
          </div>
          {step2}
          <div className="experience__button">
            <input type="submit" className="button button--large" value="¡Compartir experiencia!" />
          </div>
        </form>
    )
  }
}
